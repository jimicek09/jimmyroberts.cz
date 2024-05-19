const container = document.getElementById("container");
const canvas = document.getElementById("mainCanvas");
const colorCodeReadOut = document.getElementById("colorCodeReadOut");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
let dx = true
let dy = true
let i = 0;

let ballColor = Math.floor(Math.random() * 0xffffff);

const speed = 5
const screenHeight = 600
const screenWidth = 1000
// const ballSize = Math.floor(Math.random() * 100);
const ballSize = 90;

// const colorIncrement = Math.floor(Math.random() * 100);
const colorIncrement = 31245;


canvas.height = screenHeight;
canvas.width = screenWidth;

//const pad = canvas.getContext("2d");
//pad.fillStyle = "white";
//pad.fillRect(0, 0, 15, 50);
canvas.style.border = "solid 1px black";



let interval;
let running = false;

function start() {
  interval = setInterval(function () {
    // ctx.clearRect(x, y, ballWidth, ballHeight)
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
    colorCodeReadOut.innerText = hexColor; 
    ctx.fillRect(x, y, ballSize, ballSize)
}, 1);
}

function stop() {
  if (running){
    clearInterval(interval)
    running = false;
  } else {
    start()
  }
}

window.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
        y -= 10;
    }
    if (e.key === "ArrowDown") {
        y += 10;
    }
    if (e.key === "ArrowLeft") {
        x -= 10;
    }
    if (e.key === "ArrowRight") {
        x += 10;
    }
    if (e.key === "s") {
        stop()
    }
})

start()
