let a = $(".a").offset();
var hammerPosition = $(".hammer").offset();
var hamTop = hammerPosition.top;
var hamLeft = hammerPosition.left;
var hamRight = hammerPosition.right;
var hamBottom = hammerPosition.bottom;



alert(a.left)


let mole;
let resultOfSound;
let score = 0;
var x;






// this part is for random appearance of the mole

function randomTarget() {
  let target = Math.floor(Math.random() * 4) + 1;

  switch (target) {
    case 1:
      mole = "a";
      break;
    case 2:
      mole = "b";
      break;
    case 3:
      mole = "c";
      break;
    case 4:
      mole = "d";
      break;

    default:
      break;
  }

  $("." + mole).animate({ opacity: "1" }, 1000);

  setTimeout(function () {
    $(".diglett").animate({ opacity: "0" }, 1000);
  });
}

setInterval(randomTarget, 2500);

//to play the sound

function playResult(result) {
  if (result) {
    x = new Audio("sounds/win.wav");
    score++;
  } else {
    x = new Audio("sounds/lose.wav");
    score--;
  }
  x.play();
}




function defaultPos() {
  $(".hammer").animate({ width: "10%", top : hamTop, right: hamRight,});
}



function hitA() {
  $(".hammer").animate({ width: "20%", left: a.left,  bottom: a.bottom});
  setTimeout(defaultPos, 600);
  if (mole === "a") {
    resultOfSound = true;
  } else resultOfSound = false;
  playResult(resultOfSound);
}

function hitB() {
  $(".hammer").animate({ width: "20%", left: "17.5rem", top: "-2.8rem"});
  setTimeout(defaultPos, 600);
  if (mole === "b") {
    resultOfSound = true;
  } else resultOfSound = false;
  playResult(resultOfSound);
}

function hitC() {
  $(".hammer").animate({ width: "20%", left: "5rem"});
  setTimeout(defaultPos, 600);
  if (mole === "c") {
    resultOfSound = true;
  } else resultOfSound = false;
  playResult(resultOfSound);
}

function hitD() {
  $(".hammer").animate({ width: "20%", left: "17.5rem"});
  setTimeout(defaultPos, 600);
  if (mole === "d") {
    resultOfSound = true;
  } else resultOfSound = false;
  playResult(resultOfSound);
}
