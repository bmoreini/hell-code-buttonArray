/* "We merged the three hell-codes, and this was the result" - Chloe Galyean */

window.onload = start();

function start() {
  startText();
}


/* populateButtons populates buttonsArray and refreshes buttons.
 * First, it removes all buttons and corresponding buttonsArray elements.
 * Next, for each of the button definitions in newButtons, it
 * populates corresponding buttonsArray elements with these values 
 * Then, creates and places buttons with these values 
 * 
 * @param newButtons array of labels
 * @return none
 */
function populateButtons(newButtons){
  while (allButtons.hasChildNodes()) {
    allButtons.removeChild(allButtons.firstChild);
    buttonArray.pop();
  }
  for (let b = 0; b < newButtons.length; b++){
    buttonArray.push(newButtons[b]);
    let btn = document.createElement("BUTTON");
    btn.innerHTML = buttonArray[b][0];
    btn.setAttribute("onclick", buttonArray[b][1]);
    allButtons.appendChild(btn);
  }
}

function startText(){
  dropdown.style.display = "none";
  nameInput.style.display = "block";
  messages = ["Input your name!"];
  delayText(messages,0);
  newButtons = [["Submit","formSub()"]];
  populateButtons(newButtons);
}

function congrats(){
  messages = ["Welcome, <b>"+username+"</b>!"];
  delayText(messages,0);
  mainMenu();
}

function formSub(){
  username = userInput.value;
  userInput.style.display = "none";
  messages = ["You input <b>"+username+"</b>! Is that correct?"];
  delayText(messages,0);
  newButtons=[["Yes, that's my name!","congrats()"],["No, I want to input a different name!","startText"]];
  populateButtons(newButtons);
}

function mainMenu(){
  newButtons = [["Navigate","locNavigate()"],["Inventory","inventoryMain()"],["Stats","statsMain()"],["Interact","locInteract()"]];
  populateButtons(newButtons);
  nUpdate();
  track();
}
/* COMPARE THIS */
function locNavigate() {
  dropdown.style.display = "block";
  newButtons=[["Back","mainMenu()"],["Okay!","checkAnswers(dropdown.value)"]];
  populateButtons(newButtons);
  nUpdate();
  track();
  messages = ["<i>Select a direction to navigate.</i>"];
  delayText(messages,0);
}

/* TO THIS */
function locInteract() { 
  document.getElementById("choices").style.display = "block";
  buttonElement.innerHTML = "Back";
  document.getElementById("button1").style.display = "block";
  document.getElementById("button2").style.display = "none";
  document.getElementById("button3").style.display = "none";
  buttonElement4.innerHTML = "Okay!";
  document.getElementById("button4").style.display = "block";
  nUpdate();
  track();
  messages = ["<i>Select something to interact with.</i>"];
  delayText(messages,0);
  answer = setOptions(hotspots);
  buttonElement.setAttribute("onclick", "mainMenu()");
  buttonElement4.setAttribute("onclick", "interactAnswers(dropdown.value)");
}


function interactAnswers(answer) {
  document.getElementById("choices").style.display = "block";
  document.getElementById("button3").style.display = "none";
  document.getElementById("button2").style.display = "none";
  
  buttonElement4.innerHTML = "Okay!";
  buttonElement4.setAttribute("onclick","checkAnswers(dropdown.value)");
  document.getElementById("button4").style.display = "block";
  
  buttonElement.innerHTML = "Back";
  buttonElement.setAttribute("onclick","locInteract()");
  document.getElementById("button1").style.display = "block";
  
  current = answer;
  mergeSet(index_flavor);
  messages = [merge];
  delayText(messages,0);
  choices = ["Select...","Take"];
  answer = setOptions(choices);
}


function statsMain(){
  document.getElementById("choices").style.display = "block";
  buttonElement.innerHTML = "Okay!";
  document.getElementById("button1").style.display = "block";
  
  document.getElementById("button2").style.display = "none";
  
  buttonElement3.innerHTML = "Back";
  buttonElement3.setAttribute("onclick","mainMenu()");
  document.getElementById("button3").style.display = "block";
  
  document.getElementById("button4").style.display = "none";
  
  messages = ["<h2>Player Stats</h2>","<b>Strength: </b>"+str+" || <b>Dexterity: </b>"+dex+" || <b>Constitution: </b>"+con+" || <b>Wisdom: </b>"+wis+" || <b>Intelligence: </b>"+int+" || <b>Charisma: </b>"+cha,"Avalible stat points: "+points];
  delayText(messages,0);
  choices = ["Select...","Distribute Stat Points"];
  answer = setOptions(choices);
  buttonElement.setAttribute("onclick", "checkAnswers(dropdown.value)");
}


function inventoryMain(){
  document.getElementById("choices").style.display = "block";
  buttonElement.innerHTML = "Okay!";
  document.getElementById("button4").style.display = "none";
  document.getElementById("button2").style.display = "none";
  buttonElement3.innerHTML = "Back";
  buttonElement3.setAttribute("onclick","mainMenu()");
  document.getElementById("button3").style.display = "block";
  
  messages = ["Select an item from the dropdown below to view its information."];
  delayText(messages,0);
  
  choices = ["Select..."];
  someCount = 1;
  
  while (someCount < itemData.length){
    current = itemData[someCount];
    mergeSet(index_owned);
    if (merge == true){
      addItem(itemData[someCount]);
      
      mergeSet(index_name);
      choices.push(merge);
    }
    someCount++;
  }
  answer = setOptions(choices);
  buttonElement.setAttribute("onclick", "inventoryAnswers(dropdown.value)");
}


function mergeSet(index){
  read = "item_"+current;
  merge = window[read][index];
}


function addItem(item){
  playerInventory.push(item);
}


function itemInfo(){
  buttonElement3.innerHTML = "Back";
  buttonElement3.setAttribute("onclick","inventoryMain()");
  
  mergeSet(index_flavor);
  messages = [merge];
  delayText(messages,0);
      
  mergeSet(index_equipt);
  choices = ["Select...",merge+"quipt"];
  answer = setOptions(choices);
}


function inventoryAnswers(answer) { 
  //working on 
  someCount = 1;
  while (current != answer){
    current = itemData[someCount];
    mergeSet(index_name);
    if (merge == answer){
      mergeSet(index_id);
      current = merge;
    }
    someCount++;
  }
  itemInfo();
  buttonElement.setAttribute("onclick", "checkAnswers(dropdown.value)");
}

function nUpdate(){
  n = currentPlace;
  n = n.replace("x",gameLocation[0]);
  n = n.replace("y",gameLocation[1]);
  n = n.replace("z",gameLocation[2]);
}


function story(text) {
  currentStoryElement.innerHTML = text;
}

function setOptions(options) {
  while (dropdown.options.length) {
    dropdown.remove(0);
  }
  for (var i = 0; i < options.length; i++) {
    var option = new Option(options[i]);
    dropdown.options.add(option);
  }
}

function delayText(text, delay) {
  var index = 0;
  story("");
  var callback = function (text) {
    story(currentStoryElement.innerHTML  + text[index]+ "<br />"+ "<br />");
    index += 1;
    if (index >text.length-1){
      clearInterval(timer);
    }
  }
  var timer = setInterval(function () {
    callback(text);
  }, delay);
}