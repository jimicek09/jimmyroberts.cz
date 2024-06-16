const container = document.getElementById("container");
const canvas = document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d");

let yBat = 1450
let xBat = 100
let x = 0;
let y = 0;
let dx = true
let dy = true
let i = 0;
const speed = 2
const screenHeight = 800
const screenWidth = 1500
const ballHeight = 50
const ballWidth = 50
//const pad = canvas.getContext("2d");
//pad.fillStyle = "white";
//pad.fillRect(0, 0, 15, 50);
canvas.style.height = `${screenHeight}px`;
canvas.style.width = `${screenWidth}px`;
canvas.style.border = "solid 1px black";

const interval = setInterval(function () {
    ctx.clearRect(x, y, ballWidth, ballHeight)
    if (y >= screenHeight - ballHeight){
        dy = false
    } 
    if (y <= 0) dy = true
    if (x >= screenWidth - ballWidth) {
        dx = false
    } 
    if (x <= 0) dx = true
    x = dx ? x + speed : x - speed
    y = dy ? y + speed : y - speed
    ctx.fillRect(x, y, ballWidth, ballHeight)
}, 16);

document.addEventListener("dx")

window.onload = (function () {
  window.addEventListener("resize", resizeCanvas, false);
  function resizeCanvas() {
    canvas.width = screenWidth;
    canvas.height = screenHeight;
  }
  resizeCanvas();
})();