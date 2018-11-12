//Definerer listen vi skal bruke i koden
let list = [];

//Listene for de forskjellige spillmodusene.
let pc = [
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
let code = [
  "INNERHTML",
  "BREAK",
  "CONTINUE",
  "FUNCTION",
  "FOR",
  "WHILE",
  "IF",
  "ELSE",
  "SWITCH",
  "RETURN",
  "VAR",
  "LET",
  "STRING",
  "BOOLEAN",
  "NUMBER",
  "UNDEFINED",
  "ONCHANGE",
  "ONCLICK",
  "ONMOUSEHOVER",
  "ONMOUSEOUT",
  "ONKEYDOWN",
  "ONLOAD",
  "TOUPPERCASE",
  "TOLOWERCASE",
  "SLICE",
  "SPLICE",
  "ARRAY",
  "INDEXOF",
  "VALUEOF",
  "PARSEINT",
  "NAN",
  "DATE",
  "WRITE",
  "ALERT",
  "PROMPT",
  "LOG",
  "CONST",
  "TYPEOF",
  "INSTANCEOF",
  "FRAME",
  "SETINTERVAL",
  "CLEARINTERVAL",
  "EVENT",
  "INPUT",
  "DOCTYPE HTML",
  "HYPERTEXT MARKUP LANGUAGE",
  "HEAD",
  "BODY",
  "TITLE",
  "META CHARSET",
  "META NAME",
  "IMG",
  "HEIGHT",
  "WIDTH",
  "STYLE",
  "SCRIPT",
  "DISABLED",
  "TABLE",
  "HEADER",
  "COLOR",
  "FONT",
  "BORDER",
  "PADDING",
  "MARGIN",
  "CLASS",
  "ID",
  "LINK",
  "TARGET",
  "FLOAT",
  "FLEX",
  "ALIGN",
  "FOOTER",
  "LIST",
  "ADDRESS",
  "ARTICLE",
  "OUTPUT",
  "VIDEO",
  "CANVAS",
  "MAIN",
  "NAV",
  "FORM",
  "RADIO",
  "IFRAME",
  "BASE",
  "SUBMIT",
  "BUTTON",
  "ACTION",
  "METHOD",
  "GET",
  "POST",
  "AUTOCOMPLETE",
  "NOVALIDATE",
  "NAME",
  "SELECT",
  "VALUE",
  "TEXTAREA",
  "LABEL",
  "LEGEND",
  "OPTION",
  "DATALIST",
  "PASSWORD",
  "RESET",
  "CHECKBOX",
  "MAX",
  "MIN",
  "REQUIRED",
  "READONLY",
  "SIZE",
  "AUTOFOCUS",
  "PLACEHOLDER",
  "ABORT",
  "AFTERPRINT",
  "ANIMATIONEND",
  "ANIMATIONITERATION",
  "ANIMATIONSTART",
  "BEFOREPRINT",
  "BEFOREUNLOAD",
  "BLUR",
  "CANPLAY",
  "CHANGE",
  "CLICK",
  "CONTEXTMENY",
  "COPY",
  "CUT",
  "DBLCLICK",
  "DRAG",
  "DRAGEND",
  "DRAGENTER",
  "DRAGLEAVE",
  "DRAGOVER",
  "DRAGSTART",
  "DROP",
  "DURATIONCHANGE",
  "ENDED",
  "ERROR",
  "FOCUS",
  "FOCUSIN",
  "FOCUSOUT",
  "HASHCHANGE",
  "FULLSCREENERROR",
  "FULLSCREENCHANGE",
  "INVALID",
  "KEYDOWN",
  "KEYPRESS",
  "KEYUP",
  "LOAD",
  "LOADEDDATA",
  "LOADEDMETADATA",
  "LOADSTART",
  "MESSAGE",
  "MOUSEDOWN",
  "MOUSEENTER",
  "MOUSELEAVE",
  "MOUSEMOVE",
  "MOUSEOVER",
  "MOUSEOUT",
  "MOUSEUP",
  "MOUSEWHEEL",
  "OFFLINE",
  "ONLINE",
  "OPEN",
  "PAGEHIDE",
  "PAGESHOW",
  "PASTE",
  "PAUSE",
  "PLAY",
  "PLAYING",
  "POPSTATE",
  "PROGRESS",
  "RATECHANGE",
  "RESIZE",
  "SCROLL",
  "SEARCH",
  "SEEKED",
  "SEEKING",
  "SHOW",
  "STALLED",
  "STORAGE",
  "SUSPEND",
  "TIMEUPDATE",
  "TOGGLE",
  "TOUCHCANCEL",
  "TOUCHEND",
  "TOUCHMOVE",
  "TOUCHSTART",
  "TRANSITIONEND",
  "UNLOAD",
  "VOLUMECHANGE",
  "WAITING",
  "WHEEL",
  "CASCADING STYLE SHEETS"
];
let sql = [
  "ADD",
  "ADD CONSTRAINT",
  "ALTER",
  "ALTER COLUMN",
  "ALTER TABLE",
  "ALL",
  "AND",
  "ANY",
  "AS",
  "ASC",
  "BETWEEN",
  "CASE",
  "CHECK",
  "COLUMN",
  "CONSTRAINT",
  "CREATE",
  "CREATE DATABASE",
  "DATABASE",
  "CREATE INDEX",
  "CREATE TABLE",
  "CREATE PROCEDURE",
  "CREATE UNIQUE INDEX",
  "CREATE VIEW",
  "DEFAULT",
  "DELETE",
  "DESC",
  "DISTINCT",
  "DROP",
  "DROP COLUMN",
  "DROP CONSTRAINT",
  "DROP DATABASE",
  "DROP DEFAULT",
  "DROP INDEX",
  "DROP TABLE",
  "DROP VIEW",
  "EXEC",
  "EXISTS",
  "FOREIGN KEY",
  "FROM",
  "FULL OUTER JOIN",
  "GROUP BY",
  "HAVING",
  "IN",
  "INDEX",
  "INNER JOIN",
  "INSERT INTO",
  "INSERT INTO SELECT",
  "IS NULL",
  "IS NOT NULL",
  "JOIN",
  "LEFT JOIN",
  "LIKE",
  "LIMIT",
  "NOT",
  "NOT NULL",
  "OR",
  "ORDER BY",
  "OUTER JOIN",
  "PRIMARY KEY",
  "PROCEDURE",
  "RIGHT JOIN",
  "ROWNUM",
  "SELECT",
  "SELECT DISTINCT",
  "SELECT INTO",
  "SELECT TOP",
  "SET",
  "TABLE",
  "TOP",
  "TRUNCATE TABLE",
  "UNION",
  "UNION ALL",
  "UNIQUE",
  "UPDATE",
  "VALUES",
  "VIEW",
  "WHERE",
  "ASCII",
  "CHAR LENGTH",
  "CONCAT",
  "FIELD",
  "FIND IN SET",
  "FORMAT",
  "INSERT",
  "LEFT",
  "LENGTH",
  "LOCATE",
  "LOWER",
  "MID",
  "POSITION",
  "REPEAT",
  "REPLACE",
  "REVERSE",
  "RIGHT",
  "SPACE",
  "SUBSTRING",
  "TRIM",
  "UCASE",
  "UPPER",
  "CHARINDEX",
  "DATALENGTH",
  "DIFFERENCE",
  "REPLICATE",
  "SOUNDEX",
  "STUFF",
  "TRANSLATE",
  "UNICODE",
  "SPLIT",
  "SOME",
  "CHAR",
  "VARCHAR",
  "TINYTEXT",
  "TEXT",
  "BLOB",
  "MEDIUMTEXT",
  "MEDIUMBLOB",
  "LONGTEXT",
  "LONGBLOB",
  "SET",
  "INT",
  "FLOAT",
  "DOUBLE",
  "DECIMAL",
  "DATE",
  "DATETIME",
  "TIMESTAMP",
  " TIME",
  "YEAR",
  "BINARY",
  "VARBINARY",
  "IMAGE",
  "BIT",
  "NUMERIC",
  "MONEY",
  "REAL",
  "CURSOR",
  "MEMO",
  "INTEGER",
  "LONG",
  "SINGLE",
  "CURRENCY",
  "AUTONUMBER",
  "HYPERLINK",
  " LOOKUP WIZARD",
  "FULL JOIN",
  "UPDATE",
  "AUTO INCREMENT"
];

//Definerer variablene vi benytter i spillet
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
let canvas = document.getElementById("gameCanvas");
let life = 0;
let thePoints = 470;
let theWorm = document.getElementById("theWorm");
let id;
let gamesound = new Audio(
  "/Users/jarloysteinrovde/Desktop/bilder_spill/audio.wav"
);
let diffBugFix;
let soundToggle = document.getElementById("soundToggle");
let sound = document.getElementById("sound");
let nosound = document.getElementById("nosound");
let soundValue = 0;
gamesound.loop = true;

//Definerer variablene for startScreen
let titel = "<div class='startScreen'><h1>Virus Warfare</h1></div>";
let lore =
  "<div class='startScreen'><p id='lore'>In a not to distant future, AI has gone to far, and is threatening the world.<br><br> The AI Ormulf, has taken to solid form, and is now threatening to take control over all machines in the world.<br><br> In a vast exponential growth Ormulf spreads from machine to machine.<br><br> In less than one week, half of the machines and servers has been infested by Ormulf. <br><br> Your job is to keep Ormulf from infesting any more computers.<br><br><p></p></div>";
let howToTitle = "<div class='startScreen'><h1>How to play</h1></div>";
let howTo =
  "<div class='startScreen'><p>Worms are falling down the screen with words linked over them.<br><br>To fight the worms, you have to type in the words that are displayed, before the worm reaches the player on the bottom of the screen.<br><br>It is really important to press spacebar between the words over the worm, if there are several words.<br><br>When the whole word is typed, press any button to kill the worm.<br><br></p></div>";
let playButton =
  "<div class='startScreen'><p class='button'><button>Start Game!</button></p></div>";

//Variabel for å lagre type spill
let gamewords = 0;
//Variabel for å lagre vanskelighetsgrad
let difficulty = 50;
//Variabel for logo på meny
let menylogo = "<img src='graphic/logo.png' id='logo'></img>";
//Elementer i hovedmenyen
let pressPlay = "<p class='pressplay'>PLAY GAME</p>";
let settings = "<p class='settings'>SETTINGS</p>";
//Elementer i valg av type spill (valg av array)
let chooseGame = "<p class='choose'>CHOOSE GAMEMODE:</p>";
let javascript = "<p class='easy'>JAVASCRIPT OG HTML</p>";
let databaser = "<p class='medium'>DATABASER</p>";
let pcKomponenter = "<p class='hard'>PC-KOMPONENTER</p>";
//Elementer i valg av vanskelighetsgrad (hvor for ormen beveger seg på skjermen)
let chooseDifficulty = "<p class='choose'>CHOOSE DIFFICULTY:</p>";
let easy = "<p class='easy'>NOOB</p>";
let medium = "<p class='medium''>KINDA GOOD I GUESS...</p>";
let hard = "<p class='hard''>HACKER</p>";
// Back element
let back = "<p class='back'>BACK</p>";



//Funskjon for musikk på spillsiden
function playSound() {

  console.log("Button Clicked");
  if (soundValue === 1) {
    gamesound.pause();
    sound.style.opacity = "0";
    sound.style.filter = "alpha(opacity=0)"; //For nettlesere som ikke støtter .opacity funksjon
    nosound.style.opacity = "1";
    nosound.style.filter = "alpha(opacity=1)";
    soundValue = 0;
  } else if (soundValue === 0) {
    gamesound.play();
    nosound.style.opacity = "0";
    nosound.style.filter = "alpha(opacity=0)"; //For nettlesere som ikke støtter .opacity funksjon
    sound.style.opacity = "1";
    sound.style.filter = "alpha(opacity=1)";
    soundValue = 1;
  }
}
canvas.width = canvasWidth;
canvas.height = canvasHeight;
//Fjerner funksjonen som gjør at siden scroller når spacebar blir trykket.
window.onkeydown = function(e) {
  return !(e.keyCode == 32);
};

// Tegner spilleren inn i canvaset
let playerctx = canvas.getContext("2d");

function player() {
  base_image = new Image();
  if (life === 0) {
    base_image.src = "http://folk.ntnu.no/jarlor/spill/FULLSET3liv.png";
    playerctx.drawImage(base_image, 0, 150, 400, 400);
  }
  if (life === 1) {
    base_image.src = "http://folk.ntnu.no/jarlor/spill/FULLSET2liv.png";
    playerctx.drawImage(base_image, 0, 150, 400, 400);
  }
  if (life === 2) {
    base_image.src = "http://folk.ntnu.no/jarlor/spill/FULLSET1liv.png";
    playerctx.drawImage(base_image, 0, 150, 400, 400);
  }
}
setInterval(player, 1);


//Funksjonen som animerer ormen som faller nedover skjermen.
function frame() {
  if (pos == 390) {
    pos = diffBugFix;
    stadie1.style.opacity = "0";
    stadie1.style.filter = "alpha(opacity=0)"; //For nettlesere som ikke støtter .opacity funksjon
    stadie2.style.opacity = "0";
    stadie2.style.filter = "alpha(opacity=0)";
    stadie3.style.opacity = "0";
    stadie3.style.filter = "alpha(opacity=0)";
    life++;
    console.log(life);
    goAgainWrong();
  } else if (life === 3) { //Game over funksjonen som stopper spillet.
    gameOverScreen.style.opacity = "1";
    gameOverScreen.style.filter = "alpha(opacity=100)";
    gameOverScreen.style.zIndex = "60";

    canvas.style.opacity = "0.2";
    canvas.style.filter = "alpha(opacity=20)";
    letters = "";
    randomItem = "";
    base_image.src = "http://folk.ntnu.no/jarlor/spill/FULLSET0liv.png";
    playerctx.drawImage(base_image, 0, 150, 400, 400);
  } else {
    pos++;
    theWorm.style.top = pos + "px";
  }
}

//Funksjonen som mottar input fra tastaturet og sender dem videre til spillets kode.
function play(event) {
  keyPressed = event.keyCode;
  keyPressedChar = String.fromCharCode(keyPressed);
  document.getElementById("points").innerHTML = "Current score: " + points;

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

    goAgain();
    return;
  }
  if (keyPressedChar === currentChar) {
    i++; //Inkrementer teller for å hente neste bokstav
    if (i < letters.length) {
      // Er vi på siste bokstav?
      currentChar = letters[i]; //nopp, hent neste
      document.getElementById("word").innerHTML = letters.splice(i).join("");

      //Om ordet er i sine føste 33% av lengden, vises ormen som en hel orm.
      if (numberOfLetters * 0.3 >= letters.length) {
        stadie1.style.opacity = "1";
        stadie1.style.filter = "alpha(opacity=100)";
        stadie3.style.opacity = "0";
        stadie3.style.filter = "alpha(opacity=0)";
      } else if ( //Om ordet er mellom 33% og 70% blir ormen vist som en skadet orm.
        numberOfLetters * 0.3 <= letters.length &&
        numberOfLetters * 0.7 >= letters.length
      ) {
        stadie1.style.opacity = "0";
        stadie1.style.filter = "alpha(opacity=0)";
        stadie2.style.opacity = "1";
        stadie2.style.filter = "alpha(opacity=100)";
        explotion.innerHTML =
          "<img src='http://folk.ntnu.no/jarlor/spill/blank.gif";
      } else { //Etter 70% av ordets lengde vil ormen vises som veldig skadet, som indikerer at den snart er død.
        stadie2.style.opacity = "0";
        stadie2.style.filter = "alpha(opacity=0)";
        stadie3.style.opacity = "1";
        stadie3.style.filter = "alpha(opacity=100)";
      }
    } else {
      rightWord = true; //om ordet er riktig
      document.getElementById("word").innerHTML = letters.splice(i).join("");
      //Legger til et poeng basert på posisjonen til marken når den forsvinner
      //Formelen for poengsummen er 470 - posisjonen til ormen når den dør.
      points += thePoints - pos;
    }
  } else {
    //Hvis bruker trykker feil bokstav
    document.getElementById("word").innerHTML = letters.splice(i).join("");
  }
}
//Denne funksjonen kjører det som trengs for at et nytt ord skal kunne dukke opp når man er ferdig med forrige ord.
function goAgain() {
  document.getElementById("word").innerHTML = "";
  explotion.innerHTML =
    "<img src='http://folk.ntnu.no/jarlor/spill/explosion-3.gif'> ";
  i = 0;
  currentChar = null;
  rightWord = false;
  setTimeout(delayNext, 500);
}

//Denne funksjonen kjører en forsinkelse slik at de grafiske elementene som en eksplosjon rekker å kjøre før det nye ordet blir vist.
function delayNext() {
  pos = 80;

  stadie2.style.opacity = "0";
  stadie2.style.filter = "alpha(opacity=0)";
  stadie3.style.opacity = "0";
  stadie3.style.filter = "alpha(opacity=0)";

  newWord();
  frame = null;
  setInterval(id);
  stadie1.style.opacity = "1";
  stadie1.style.filter = "alpha(opacity=100)";
}

//Dersom spilleren ikke klarer å skrive inn ordet før det når bunnen av canvasen.
function goAgainWrong() {
  document.getElementById("word").innerHTML = "";
  explotion.innerHTML =
    "<img src='http://folk.ntnu.no/jarlor/spill/explosion-3.gif'> ";
  i = 0;
  currentChar = null;
  rightWord = false;
  setTimeout(delayNextWrong, 500);
}
//samme som funksjonen delayNext, men dersom ordet ikke er riktig innen det når bunnen av skjermen.
function delayNextWrong() {
  pos = 80;

  stadie2.style.opacity = "0";
  stadie2.style.filter = "alpha(opacity=0)";
  stadie3.style.opacity = "0";
  stadie3.style.filter = "alpha(opacity=0)";
  stadie1.style.opacity = "1";
  stadie1.style.filter = "alpha(opacity=100)";
  console.log("Funksjonen kjører");
  newWord();
  frame = null;
}
//Funksjon som lar spilleren prøve spillet på nytt etter gameover
function tryAgain() {
  points = 0;
  i = 0;
  life = 0;
  goAgain();
  gameOverScreen.style.opacity = "0";
  gameOverScreen.style.filter = "alpha(opacity=0)";
  canvas.style.opacity = "1";
  canvas.style.filter = "alpha(opacity=100)";
}
//Funksjonen som starter spillet etter at gamemode og vanskelighetsgrad er valgt
function startGame() {
  id = setInterval(frame, difficulty);
  newWord();
  canvas.style.opacity = "1";
  canvas.style.filter = "alpha(opacity=100)";
  stadie1.style.opacity = "1";
  stadie1.style.filter = "alpha(opacity=100)";
}

//Her loader menyen
createMenuLogo();
loadMenu();

function loadMenu() {
  $(document).ready(function() {
    createMenu();
    checkPressed();
  });

  function checkPressed() {
    //Funksjonen som går av når pressPlay er pressed
    $("p.pressplay").click(function() {
      $("p").remove(); //Sletter tidligere p elementer før vi legger inn nye
      $("div.meny").append(
        chooseGame,
        javascript,
        databaser,
        pcKomponenter,
        back
      );

      //Funksjoner som velger og lagrer array som skal brukes før startGame screen
      $("p.easy").click(function() {
        sessionStorage.setItem("gamemode", 0);
        gamewords = parseInt(sessionStorage.getItem("gamemode"));
        console.log("javascript pressed");
        $("div.meny").empty(); //Fjerner alt i meny diven.
        $("div.meny").append(titel, lore, howToTitle, howTo, playButton);
        list = code;
        //onLoad();
        playGame();
      });
      // Funksjon som velger og larer array som brukes før startGame screen
      $("p.medium").click(function() {
        sessionStorage.setItem("gamemode", 1);
        gamewords = parseInt(sessionStorage.getItem("gamemode"));
        console.log("databaser pressed");
        $("div.meny").empty(); //Fjerner alt i meny diven.
        $("div.meny").append(titel, lore, howToTitle, howTo, playButton);
        list = sql;
        //onLoad();
        playGame();
      });
      $("p.hard").click(function() {
        sessionStorage.setItem("gamemode", 2);
        gamewords = parseInt(sessionStorage.getItem("gamemode"));
        console.log("pcKomponenter pressed");
        $("div.meny").empty(); //Fjerner alt i meny diven.
        $("div.meny").append(titel, lore, howToTitle, howTo, playButton);
        list = pc;
        playGame();
      });
      $("p.back").click(function() {
        $("p").remove(); //Sletter tidligere p elementer før vi legger inn nye
        loadMenu();
      });
    });

    //Funksjon som går av når settings er pressed
    $("p.settings").click(function() {
      $("p").remove(); //Sletter tidligere p elementer før vi legger inn nye
      $("div.meny").append(chooseDifficulty, easy, medium, hard, back);

      //Funksjon som går av når NOOB er pressed
      //lagrer vanskelighet til verdi 45
      $("p.easy").click(function() {
        console.log("Easy pressed");
        sessionStorage.setItem("vanskelighet", 45);
        diffBugFix = 380;
        difficulty = parseInt(sessionStorage.getItem("vanskelighet"));
        loadMenu();
      });

      //Funksjon som går av når Kinda Good I Guess er pressed
      //lagrer vanskelighet til verdi 35
      $("p.medium").click(function() {
        console.log("medium pressed");
        sessionStorage.setItem("vanskelighet", 35);
        diffBugFix = 370;
        difficulty = parseInt(sessionStorage.getItem("vanskelighet"));
        loadMenu();
      });

      //Funksjon som går av når Hacker er pressed
      //lagrer vanskelighet til verdi 35
      $("p.hard").click(function() {
        console.log("hard pressed");
        sessionStorage.setItem("vanskelighet", 25);
        diffBugFix = 360;
        difficulty = parseInt(sessionStorage.getItem("vanskelighet"));
        loadMenu();
      });
      //Funskjonen som gjør at du går tilbake til startsiden på menyen
      $("p.back").click(function() {
        $("p").remove(); //Sletter tidligere p elementer før vi legger inn nye
        loadMenu();
      });
    });
  }
}

function createMenu() {
  $("p").remove(); //Sletter tidligere p elementer før vi legger inn nye
  $("div.meny").append(pressPlay, settings);
}
function createMenuLogo() {
  $("div.meny").append(menylogo);
}
//Funksjonen som kaller på spillets start i menyen, etter at vanskelighets og gamemode er valgt.
function playGame() {
  $("p.button").click(function() {
    console.log("button pressed");
    $("div.meny").remove();
    startGame();
  });
} //Setter vanskelighetsgraden i sessionStorage.
function receiveDifficulty() {
  difficulty = parseInt(sessionStorage.getItem("vanskelighet"));
  console.log("Vanskelighetsgraden er: ", difficulty);
}
