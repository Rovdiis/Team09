let list = [
  "MOTHERBOARD",
  "CASE",
  "POWER SUPPLY UNIT",
  "PROCESSOR",
  "CPU COOLER",
  "MEMORY",
  "RANDOM ACCESS MEMORY",
  "HARD DRIVE",
  "SOLID STATE DRIVE",
  "DIGITAL VERSATILE DISC",
  "GRAPHICS PROCESSING UNIT",
  "SOUND CARD",
  "COMPUTER MOUSE",
  "KEYBOARD",
  "UNIVERSAL SERIAL BUS",
  "SPEAKERS",
  "PRINTER",
  "MONITOR",
  "SYSTEM SOFTWARE",
  "APPLICATION SOFTWARE",
  "FRONT SIDE BUS",
  "MEMORY BUS",
  "SERIAL ATA BUS",
  "PCI EXPRESS BUS",
  "CPU CACHE",
  "HEADPHONES",
  "SCANNER",
  "JOYSTICK",
  "GAMEPAD",
  "WORLD WIDE WEB",
  "WIRELESS LOCAL AREA NETWORK",
  "WIDE AREA NETWORK",
  "WORLD WIDE WEB",
  "WINDOWS MEDIA AUDIO",
  "WINDOWS MEDIA VIDEO",
  "VISUAL BASIC",
  "VIRTUAL REALITY",
  "UNICODE TRANSFORMATION FORMAT",
  "UNIFORM RESOURCE LOCATOR",
  "TRANSPORT CONTROL PROTOCOL",
  "SERVICE SET IDENTIFIER",
  "SECURE DIGITAL",
  "SERIAL ADVANCED TECHNOLOGY ATTACHMENT",
  "PORTABLE NETWORK GRAPHICS",
  "PHP HYPERTEXT PREPROCESSOR",
  "PROGRAMMED DATA PROCESSOR",
  "PORTABLE DOCUMENT FORMAT",
  "PERIPHERCAL COMPONENT INTERCONNECT",
  "PERSONAL COMPUTER",
  "PERSONAL AREA NETWORK",
  "OPERATING SYSTEM",
  "NETWORK INTERFACE CARD",
  "NETWORK ADDRESS TRANSLATION",
  "MOTION PICTURE EXPERTS GROUP",
  "MULTIMEDIA MESSAGE SERVICE",
  "METROPOLITAN AREA NETWORK",
  "MEDIA ACCESS CONTROL",
  "LIGHT EMITTING DIODE",
  "LOCAL AREA NETWORK",
  "JOINT PHOTOGRAPHIC EXPERTS GROUP",
  "INTERNET SERVICE PROVIDER",
  "INTEGRATED SERVICES DIGITAL NETWORK",
  "INTERNET PROTOCOL",
  "HIGH DEFINITION MULTIMEDIA INTERFACE",
  "GATEWAY",
  "GRAPHICAL USER INTERFACE",
  "GLOBAL POSITIONING SYSTEM",
  "GRAPHICS INTERCHANGE FORMAT",
  "FILE TRANSFER PROTOCOL",
  "FRAMES PER SECOND",
  "FILE ALLOCATION TABLE",
  "DIGITAL USER INTERFACE",
  "DISK OPERATING SYSTEM",
  "DOMAIN NAME SYSTEM",
  "DIRECT MEMORY ACCESS",
  "DYNAMIC HOST CONFIGURATION PROTOCOL",
  "CHIPSET",
  "AUDIO VIDEO INTERLEAVE",
  "ADVANCED TECHNOLOGY EXTENDED",
  "ADVANCED TECHNOLOGY",
  "APPLICATION PROGRAM INTERFACE",
  "ADVANCED MICRO DEVICES",
  "ARITHMETIC LOGIC UNIT",
  "ARTIFICIAL INTELLIGENCE"
];
let randomItem;
let keyPressed;
let keyPressedChar;
let letters;
let points = 0;
let i = 0;
let currentChar = null;
let rightWord = false;
let numberOfLetters = 0;
let stadie1 = document.getElementById("stadie1");
let stadie2 = document.getElementById("stadie2");
let stadie3 = document.getElementById("stadie3");
let explotion = document.getElementById("explotion");
let gameOverScreen = document.getElementById("gameOverScreen");
let pos = 80;
let canvasWidth = 400;
let canvasHeight = 550;
let canvas = document.getElementById("spill1");
let life = 0;
let thePoints = 470;
let theWorm = document.getElementById("theWorm");
let id = setInterval(frame, 50);
var gamesound = new Audio('/Users/jarloysteinrovde/Desktop/bilder_spill/audio.wav');
function playSound(){
  gamesound.play();

}
//let speed = 50;
canvas.width = canvasWidth;
canvas.height = canvasHeight;
//Fjerner funksjonen som gjør at siden scroller når spacebar blir trykket.
window.onkeydown = function(e) {
  return !(e.keyCode == 32);
};

let playerctx = canvas.getContext("2d");

function player() {
  base_image = new Image();
if(life === 0){
  base_image.src =
    "http://folk.ntnu.no/jarlor/spill/FULLSET3liv.png";
  playerctx.drawImage(base_image, 0, 150, 400, 400);
}
if(life === 1){
  base_image.src =
    "http://folk.ntnu.no/jarlor/spill/FULLSET2liv.png";
  playerctx.drawImage(base_image, 0, 150, 400, 400);
}
if(life === 2){
  base_image.src =
    "http://folk.ntnu.no/jarlor/spill/FULLSET1liv.png";
  playerctx.drawImage(base_image, 0, 150, 400, 400);
}


}
setInterval(player, 1);


  function frame() {
    if (pos == 390) {
      life++;
      console.log(life);
      //clearInterval(id);
      pos = 380;
      goAgainWrong();
    } else if (life === 3) {
      //alert("Game over. Your final score is: " + points);
      gameOverScreen.style.opacity = "1";
      gameOverScreen.style.filter = "alpha(opacity=100)";
      canvas.style.opacity = "0.2";
      canvas.style.filter = "alpha(opacity=20)";
      letters = "";
      randomItem = "";
      base_image.src =
        "http://folk.ntnu.no/jarlor/spill/FULLSET0liv.png";
      playerctx.drawImage(base_image, 0, 150, 400, 400);
    } else {
      pos++;
      theWorm.style.top = pos + "px";
    }
  }



function play(event) {
  keyPressed = event.keyCode;
  keyPressedChar = String.fromCharCode(keyPressed);
  document.getElementById("points").innerHTML = "Current score: " + points;
  document.getElementById("thePoints").innerHTML = "Your final score is: " + points;



  splitWord();
  checkValue();
}
// Denne funksjonen splitter opp ordet til en egen array.
function splitWord() {
  letters = randomItem.split("");
  //Denne displayer order på skjermen
  document.getElementById("word").innerText = letters.join("");
  numberOfLetters = letters.length;
}
//Denne funksjonen velger ut et nytt tilfeldig ord
function newWord() {
  randomItem = list[Math.floor(Math.random() * list.length)];
  splitWord();
  playSound();



  currentChar = letters[i];
}
//Denne funksjonen sjekker om det du taster på tastaturet er det samme som neste bokstav
function checkValue() {
  if (rightWord) {
    //Hvis ordet er riktig

    goAgain();
    return;
  }
  if (keyPressedChar === currentChar) {
    i++; //Inkrementer teller for å hente neste bokstav
    if (i < letters.length) {
      // Er vi på siste siste bokstav?
      currentChar = letters[i]; //nopp, hent neste
      document.getElementById("word").innerHTML = letters.splice(i).join("");

      if (numberOfLetters * 0.3 >= letters.length) {
        stadie1.style.opacity = "1";
        stadie1.style.filter = "alpha(opacity=100)";
        stadie3.style.opacity = "0";
        stadie3.style.filter = "alpha(opacity=0)";
      } else if (
        numberOfLetters * 0.3 <= letters.length &&
        numberOfLetters * 0.7 >= letters.length
      ) {
        stadie1.style.opacity = "0";
        stadie1.style.filter = "alpha(opacity=0)";
        stadie2.style.opacity = "1";
        stadie2.style.filter = "alpha(opacity=100)";
        explotion.innerHTML = "<img src='http://folk.ntnu.no/jarlor/spill/blank.gif";

      } else {
        stadie2.style.opacity = "0";
        stadie2.style.filter = "alpha(opacity=0)";
        stadie3.style.opacity = "1";
        stadie3.style.filter = "alpha(opacity=100)";
      }
    } else {
      rightWord = true; //jepp, sett til null
      document.getElementById("word").innerHTML = letters.splice(i).join("");
      //Legger til et poeng basert på posisjonen til marken når den forsvinner
      points += (thePoints-pos);
    }
  } else {
    //Hvis bruker trykker feil bokstav
    document.getElementById("word").innerHTML = letters.splice(i).join("");
  }
}
//Denne funksjonen kjører det som trengs for at et nytt ord skal kunne dukke opp når man er ferdig med forrige ord.
function goAgain() {
  document.getElementById("word").innerHTML = ("");
  explotion.innerHTML =
    "<img src='http://folk.ntnu.no/jarlor/spill/explosion-3.gif'> ";
  i = 0;
  currentChar = null;
  rightWord = false;
  //speed--;
  setTimeout(delayNext, 500);
//delayNext();



}
function delayNext(){
stadie2.style.opacity = "0";
stadie2.style.filter = "alpha(opacity=0)";
stadie3.style.opacity = "0";
stadie3.style.filter = "alpha(opacity=0)";
stadie1.style.opacity = "1";
stadie1.style.filter = "alpha(opacity=100)";

pos = 80;
newWord();
frame = null;
setInterval(id);

}
function goAgainWrong(){
  document.getElementById("word").innerHTML = ("");
  explotion.innerHTML =
    "<img src='http://folk.ntnu.no/jarlor/spill/explosion-3.gif'> ";
  i = 0;
  currentChar = null;
  rightWord = false;
  //speed--;
  setTimeout(delayNextWrong, 500);
//delayNext();
}

function delayNextWrong(){
  stadie2.style.opacity = "0";
  stadie2.style.filter = "alpha(opacity=0)";
  stadie3.style.opacity = "0";
  stadie3.style.filter = "alpha(opacity=0)";
  stadie1.style.opacity = "1";
  stadie1.style.filter = "alpha(opacity=100)";
  console.log("Funksjonen kjører");
  newWord();
  setInterval(id);
  pos = 80;
  frame = null;
}

function tryAgain(){
  points = 0;
  i = 0;
  life = 0;
  goAgain();
  gameOverScreen.style.opacity = "0";
  gameOverScreen.style.filter = "alpha(opacity=0)";
  canvas.style.opacity = "1";
  canvas.style.filter = "alpha(opacity=100)";
}
