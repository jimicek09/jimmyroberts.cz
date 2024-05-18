const container = document.getElementById("container");
const canvas = document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
let dx = true
let dy = true
let i = 0;

const speed = 5
const screenHeight = 600
const screenWidth = 1000
const ballHeight = 10
const ballWidth = 10


canvas.height = screenHeight;
canvas.width = screenWidth;

//const pad = canvas.getContext("2d");
//pad.fillStyle = "white";
//pad.fillRect(0, 0, 15, 50);
canvas.style.border = "solid 1px black";

let ballColor = 0;

const interval = setInterval(function () {
    // ctx.clearRect(x, y, ballWidth, ballHeight)
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
    ballColor++
    if (ballColor > 16777215) ballColor = 0
    ctx.fillStyle = `#${ballColor.toString(16)}`;
    ctx.fillRect(x, y, ballWidth, ballHeight)
}, 5);
