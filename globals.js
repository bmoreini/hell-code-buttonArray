/* Global Variables */

/* DOM Variables */
var allButtons = document.getElementById("allButtons");
var currentStoryElement = document.getElementById("currentStory");
var dropdown = document.getElementById("choices");
var userInput = document.getElementById("userInput");
var nameInput = document.getElementById("nameInput");
var submitButton = document.getElementById("submit");
var username = userInput.value;

/* Other Variables */
var nameComp = null;
var buttonArray=[];
var gameLocation = [0,0,0];
var currentPlace = "x,y,z";
var n = currentPlace;
var hotspots = [];
var options = [];
var messages = [];
var choices = [];
var newButtons = [];
var answer = null;
var str = 10; 
var tempstr = str;
var dex = 10;
var tempdex = dex;
var con = 10;
var tempcon = con;
var wis = 10;
var tempwis = wis;
var int = 10;
var tempint = int;
var cha = 10;
var tempcha = cha;
var playerStats = [str,dex,con,wis,int,cha];
var points = 2;
var tempPoints = points;
var playerInventory = [];
var itemData = [null,"knifeA","book","hat"];
// name, owned, equipt, flavor text
var item_knifeA = ["knifeA","Knife",true,"Une","A rather pointy knife."];
var item_book = ["book","Book",false,"E","A very heavy book."];
var item_hat = ["hat","Hat",false,"E","A rather soft hat with a nice pom-pom."];
var index_id = 0; var index_name = 1; var index_owned = 2; var index_equipt = 3; var index_flavor = 4; var index_area = 5;
//var equiptItems = [null,null];
//player areas: head, neck, body, legs, feet, hands, held
var current = itemData[3];
var read = "item_"+current;
var merge = window[read][index_name];
var someCount = 0;
var locItems = [];
