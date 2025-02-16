let userSeq = [];
let gameSeq = [];
let started = false;
let level = 0;
let h3 = document.querySelector("h3");
let btns = ["b1", "b2", "b3", "b4"];
let maxScore = 0;
let span = document.querySelector("span");
//start game when any key is pressed
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game started");
    started = true;
    levelUp();
  } 
});

function levelUp() {
  userSeq = [];
  level++;
  //update h3
  h3.innerText = `Level ${level}`;
  //flash btn
  let rand = Math.floor(Math.random() * 3);
  let btnId = btns[rand];
  let randBtn = document.querySelector(`#${btnId}`);
  //update game seq
  gameSeq.push(btnId);
  console.log(`gameSeq: ${gameSeq}`);
  btnFlash(randBtn);
}

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => { btn.classList.remove("flash") }, 100);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(() => { btn.classList.remove("userflash") }, 100);
}

let allBtns = document.querySelectorAll(".btn");

function btnPress(b) {
  let btn = this;
  //update user seq
  userSeq.push(btn.id);
  console.log(` user : ${userSeq}`);
  userFlash(btn);
  checkAns(userSeq.length-1);
}
//when user press any btn
for (btn of allBtns) {
  btn.addEventListener("click",btnPress);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  }
  else {
    document.body.style.backgroundColor = "red";
    setTimeout(function () {
      document.body.style.backgroundColor = "white";
    }, 100);
    h3.innerHTML = `Game Over !<br> Your score was <b>${level} <b> <br> press any key to start`;
    console.log("Game Over!");
    if (level > maxScore) {
      maxScore = level;
      span.innerText = level;
    }
    reset();
  }
}
function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}