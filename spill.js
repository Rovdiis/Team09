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
  "GAMEPAD"
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
let theWorm = document.getElementById("theWorm");
let explotion = document.getElementById("explotion");
let pos = 100;
let canvasWidth = 400;
let canvasHeight = 550;
let canvas = document.getElementById("spill1");
canvas.width = canvasWidth;
canvas.height = canvasHeight;


let playerctx = canvas.getContext("2d");

player();
function player() {
  base_image = new Image();
  base_image.src = "/Users/jarloysteinrovde/Downloads/sprite-animation/FULLSET3liv.png";
    playerctx.drawImage(base_image, 0, 150, 400, 400);

}


animate();
function animate() {
  var theWorm = document.getElementById("theWorm");
  var id = setInterval(frame, 50);
  function frame() {
    if (pos == 390) {
      clearInterval(id);
      console.log("Game over");

    } else {
      pos++;
      theWorm.style.top = pos + 'px';
    }
  }
}


setInterval(player, 0.001);

function play(event) {
  keyPressed = event.keyCode;
  keyPressedChar = String.fromCharCode(keyPressed);
  document.getElementById("points").innerHTML = "Din poengsum er: " + points;

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

  currentChar = letters[i];
}
//Denne funksjonen sjekker om det du taster på tastaturet er det samme som neste bokstav
function checkValue() {
  if (rightWord) {
    //Hvis ordet er riktig
    wormsplotion();

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
        explotion.innerHTML = " ";
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
      } else {
        stadie2.style.opacity = "0";
        stadie2.style.filter = "alpha(opacity=0)";
        stadie3.style.opacity = "1";
        stadie3.style.filter = "alpha(opacity=100)";

      }
    } else {
      rightWord = true; //jepp, sett til null
      document.getElementById("word").innerHTML = letters.splice(i).join("");
      //Legger til et poeng
      points++;

    }
  } else {
    //Hvis bruker trykker feil bokstav
    document.getElementById("word").innerHTML = letters.splice(i).join("");
  }
}
//Denne funksjonen kjører det som trengs for at et nytt ord skal kunne dukke opp når man er ferdig med forrige ord.
function goAgain() {
  i = 0;
  currentChar = null;
  rightWord = false;
  newWord();
  stadie3.style.opacity = "0";
  stadie3.style.filter = "alpha(opacity=0)";
  stadie1.style.opacity = "1";
  stadie1.style.filter = "alpha(opacity=100)";

  pos = 100;
}

function wormsplotion(){
  explotion.innerHTML = "<img src='/Users/jarloysteinrovde/Desktop/bilder_spill/explosion-3.gif'>";

}
