const container = document.getElementById("container");
const canvas = document.getElementById("mainCanvas");
const colorCodeReadOut = document.getElementById("colorCodeReadOut");
const ctx = canvas.getContext("2d");
const paddle = canvas.getContext("2d");

let x = 0;
let y = 0;
let dx = true
let dy = true
let i = 0;
let paddleY = 200
let paddleYOld

let ballColor = Math.floor(Math.random() * 0xffffff);

const speed = 5
const screenHeight = 600
const screenWidth = 1000
//const ballSize = Math.floor(Math.random() * 100);
const ballSize = 60;

const colorIncrement = Math.floor(Math.random() * 0);
//const colorIncrement = 1;
//const colorIncrement = 1;


canvas.height = screenHeight;
canvas.width = screenWidth;

canvas.style.border = "solid 1px black";

let interval;
let running = false;

document.addEventListener("keypress", function(event) {

  switch(event.keyCode){
    case 119:
      console.log("w pressed" )
      // do something
      paddleYOld = paddleY
      if (paddleY > 0 || paddleY < 600)
      paddleY = paddleY - 10
      break;
    case 115:
      console.log("s pressed")
      // doi something else
      paddleYOld = paddleY
      if (paddleY > 0 || paddleY < 600) {
      paddleY = paddleY + 10
      };
      break;
  }

});



function start() {
  interval = setInterval(function () {
    reRenderBall()
    // render paddle
    paddle.clearRect(60, paddleYOld, 35, 120);
    paddle.fillRect(60, paddleY, 35, 120);
    paddle.fillStyle = "black";
    
  }, 5);
}

function reRenderBall(){
  ctx.clearRect(x, y, ballSize, ballSize)
  running = true;
  if (y >= screenHeight - ballSize){
      dy = false
  } 
  if (y <= 0) dy = true
  if (x >= screenWidth - ballSize) {
      dx = false
  } 
  if (x <= 0) dx = true
  x = dx ? x + speed : x - speed
  y = dy ? y + speed : y - speed
  ballColor = ballColor + colorIncrement
  if (ballColor > 16777215) ballColor = 0
  const hexColor = `#${ballColor.toString(16)}`
  ctx.fillStyle = hexColor;
  //colorCodeReadOut.innerText = hexColor; 
  ctx.fillRect(x, y, ballSize, ballSize)
}

function stop() {
  if (running){
    clearInterval(interval)
    running = false;
  } else {
    start()
  }
}

start()
