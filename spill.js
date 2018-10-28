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
let progress = document.getElementById("progress");
let numberOfLetters = 0;
let stadie1 = document.getElementById("stadie1");
let stadie2 = document.getElementById("stadie2");
let stadie3 = document.getElementById("stadie3");
let canvasWidth = 400;
let canvasHeight = 550;

let canvas = document.getElementById("spill1");
let doAnimation = true;
let worm1 = new Image();




canvas.width = canvasWidth;
canvas.height = canvasHeight;


let playerctx = canvas.getContext("2d");

player();
function player() {
  base_image = new Image();
  base_image.src = "/Users/jarloysteinrovde/Downloads/sprite-animation/FULLSET3liv.png";
//  base_image.onload = function() {
    playerctx.drawImage(base_image, 0, 150, 400, 400);
//  };

}

function animation(){

  let spriteWidth = 125;
  let spriteHeight = 62.5;
  let rows = 1;
  let cols = 2;
  let width = spriteWidth / cols;
  let height = spriteHeight / rows;
  let curFrame = 0;
  let frameCount = 2;
  let x = 180;
  let y = 0;
  let srcX;
  let srcY;
  let speed = -12;
  //let worm = [];

let ctx = canvas.getContext("2d");
    worm1.onload = function() {

      function draw() {
        updateFrame();
        ctx.drawImage(worm1, srcX, srcY, width, height, x, y, width, height);
      }

      function updateFrame() {
        curFrame = ++curFrame % frameCount;
        srcX = curFrame * width;
        ctx.clearRect(x, y, width, height);

        srcY = 0 * height;
        y -= speed;
      }



    setInterval(draw, 500);

    if(!doAnimation){
      ctx.clearRect(worm1, srcX, srcY, width, height, x, y, width, height);
      ctx.clearRect(x, y, width, height);
      return;
    }

   };
  worm1.src = "/Users/jarloysteinrovde/Downloads/sprite-animation/spritetest2.png";
}




setInterval(player, 0.001);


function play(event) {
  keyPressed = event.keyCode;
  //console.log(event.keyCode);
  keyPressedChar = String.fromCharCode(keyPressed);
  //console.log("Keyboard press works: " + keyPressedChar);
  document.getElementById("points").innerHTML = "Din poengsum er: " + points;

  splitWord();
  checkValue();
}
// Denne funksjonen splitter opp ordet til en egen array.
function splitWord() {
  letters = randomItem.split("");
  //Denne displayer order på skjermen
  document.getElementById("word").innerText =
    "The word is: " + letters.join("");
  numberOfLetters = letters.length;
  //console.log(numberOfLetters);
}
//Denne funksjonen velger ut et nytt tilfeldig ord
function newWord() {
  randomItem = list[Math.floor(Math.random() * list.length)];
  splitWord();
  animation();
  currentChar = letters[i];
}
//Denne funksjonen sjekker om det du taster på tastaturet er det samme som neste bokstav
function checkValue() {
  if (rightWord) {
    //Hvis ordet er riktig
    //  console.log("Ferdig :D");
    goAgain();
    return;
  }
  //  console.log("sammenligner: " + currentChar + " og " + keyPressedChar);
  if (keyPressedChar === currentChar) {
    //  console.log("Du fant riktig bokstav!");
    i++; //Inkrementer teller for å hente neste bokstav
    if (i < letters.length) {
      // Er vi på siste siste bokstav?
      currentChar = letters[i]; //nopp, hent neste
      document.getElementById("word").innerHTML =
        "The word is: " + letters.splice(i).join("");

      // if (numberOfLetters * 0.3 >= letters.length) {
      //   worm1.style.opacity = "0";
      //   worm1.style.filter = "alpha(opacity=100)";
      //   stadie3.style.opacity = "0";
      //   stadie3.style.filter = "alpha(opacity=0)";
      // } else if (
      //   numberOfLetters * 0.3 <= letters.length &&
      //   numberOfLetters * 0.7 >= letters.length
      // ) {
      //   stadie1.style.opacity = "0";
      //   stadie1.style.filter = "alpha(opacity=0)";
      //   stadie2.style.opacity = "1";
      //   stadie2.style.filter = "alpha(opacity=100)";
      // } else {
      //   stadie2.style.opacity = "0";
      //   stadie2.style.filter = "alpha(opacity=0)";
      //   stadie3.style.opacity = "1";
      //   stadie3.style.filter = "alpha(opacity=100)";
      // }
    } else {
      rightWord = true; //jepp, sett til null
      document.getElementById("word").innerHTML =
        "The word is: " + letters.splice(i).join("");
      //Legger til et poeng
      points++;
      resetCanvas()

    }
  } else {
    //Hvis bruker trykker feil bokstav
    document.getElementById("word").innerHTML =
      "The word is: " + letters.splice(i).join("");
    //console.log("Feil bokstav!!");
    //console.log("riktig er: " + letters[i]);
  }
}
//Denne funksjonen kjører det som trengs for at et nytt ord skal kunne dukke opp når man er ferdig med forrige ord.
function goAgain() {
  i = 0;
  currentChar = null;
  rightWord = false;
  newWord();
  animation();
  //doAnimation = true;
  // stadie3.style.opacity = "0";
  // stadie3.style.filter = "alpha(opacity=0)";
}
function resetCanvas() {
        doAnimation = false;
      }
