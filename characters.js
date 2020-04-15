
function statPointDis() {
  if (tempPoints > 0){
    messages = ["<b>Strength: </b>"+tempstr+" || <b>Dexterity: </b>"+tempdex+" || <b>Constitution: </b>"+tempcon+" || <b>Wisdom: </b>"+tempwis+" || <b>Intelligence: </b>"+tempint+" || <b>Charisma: </b>"+tempcha,"Avalible stat points: "+tempPoints,"Select a stat from the dropdown below to add a point to it. Click \"Save\" to save changes, and \"Back\" to clear them! Be careful, saved changes cannot be undone."];
    delayText(messages,0);

    choices = ["Select...","Strength","Dexterity","Constitution","Wisdom","Intelligence","Charisma"];
    answer = setOptions(choices);

    buttonElement.setAttribute("onclick","statTempest(dropdown.value)");
    document.getElementById("button1").style.display = "block";

    buttonElement3.innerHTML = "Back";
    buttonElement3.setAttribute("onclick","statsMain()");
    document.getElementById("button3").style.display = "block";

    buttonElement2.innerHTML = "Save";
    buttonElement2.setAttribute("onclick","updateStats()");
    document.getElementById("button2").style.display = "block";
  }
  
  else {
    messages = ["<b>Strength: </b>"+tempstr+" || <b>Dexterity: </b>"+tempdex+" || <b>Constitution: </b>"+tempcon+" || <b>Wisdom: </b>"+tempwis+" || <b>Intelligence: </b>"+tempint+" || <b>Charisma: </b>"+tempcha,"Avalible stat points: "+tempPoints,"You have no stat points avalible to distribute."];
    delayText(messages,0);
    
    buttonElement3.innerHTML = "Back";
    buttonElement3.setAttribute("onclick","statsMain()");
    
    document.getElementById("choices").style.display = "none";
    document.getElementById("button1").style.display = "none";
  }
}


function statTempest(answer) {
  switch(answer) {
    case "Strength": {
      tempstr++;
      break;
    }
    case "Dexterity": {
      tempdex++;
      break;
    }
    case "Constitution": {
      tempcon++;
      break;
    }
    case "Wisdom": {
      tempwis++;
      break;
    }
    case "Intelligence": {
      tempint++;
      break;
    }
    case "Charisma": {
      tempcha++;
      break;
    }
  }
  tempPoints--;
  statPointDis();
}


function setTempStats() {
  tempstr = str;
  tempdex = dex;
  tempcon = con;
  tempwis = wis;
  tempint = int;
  tempcha = cha;
  tempPoints = points;
}

function updateStats() {
  document.getElementById("choices").style.display = "none";
  document.getElementById("button1").style.display = "none";
  document.getElementById("button2").style.display = "none";
  
  str = tempstr;
  dex = tempdex;
  con = tempcon;
  wis = tempwis;
  int = tempint;
  cha = tempcha;
  points = tempPoints;
  
  messages = ["<b>Strength: </b>"+str+" || <b>Dexterity: </b>"+dex+" || <b>Constitution: </b>"+con+" || <b>Wisdom: </b>"+wis+" || <b>Intelligence: </b>"+int+" || <b>Charisma: </b>"+cha,"Avalible stat points: "+points,"Your stats have been updated!"];
  delayText(messages,0);
}

function checkAnswers(answer) {
  switch(answer) {
    case "North": {
      gameLocation[1]++;
      mainMenu();
      break;
    }
      
    case "South": {
      gameLocation[1]--;
      mainMenu();
      break;
    }
      
    case "East": {
      gameLocation[0]++;
      mainMenu();
      break;
    }
      
    case "West": {
      gameLocation[0]--;
      mainMenu();
      break;
    }
      
    case "Equipt": {
      mergeSet(index_equipt);
      messages = [merge+"quipted "+current+"."];
      delayText(messages,0);
      
      window["item_"+current][index_equipt] =  "Une";
      mergeSet(index_equipt);
      choices = ["Select...",merge+"quipt"];
      answer = setOptions(choices);
      break;
    }
      
    case "Unequipt": {
      mergeSet(index_equipt);
      messages = [merge+"quipted "+current+"."];
      delayText(messages,0);
      
      window["item_"+current][index_equipt] =  "E";
      mergeSet(index_equipt);
      choices = ["Select...",merge+"quipt"];
      answer = setOptions(choices);
      break;
    }
      
    case "Distribute Stat Points": {
      setTempStats();
      statPointDis();
    }
      
    case "No, I want to input a different name!": {
      startText();
      break;
    }
      
    case "Yes, that's my name!": {
      nameComp = true;
      congrats();
      break;
    }
      
    case "Take": {
      document.getElementById("choices").style.display = "none";
      document.getElementById("button4").style.display = "none";
      
      read = "item_"+current;
      window[read][index_owned] =  true;
      
      messages = ["You take the "+current+"."];
      delayText(messages,0);
      break;
    }
    
  }
}