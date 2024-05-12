const container = document.getElementById("container");
const canvas = document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
let dx = true
let dy = true
let i = 0;
const speed = 5
const screenHeight = 800
const screenWidth = 1500
const ballHeight = 5
const ballWidth = 5
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
}, 16);

(function () {
  window.addEventListener("resize", resizeCanvas, false);

  function resizeCanvas() {
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    ctx.fillRect(x,y,canvas.width, canvas.height)
  }
  resizeCanvas();
})();