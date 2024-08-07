const container = document.getElementById("container");
const canvas = document.getElementById("mainCanvas");
const colorCodeReadOut = document.getElementById("colorCodeReadOut");
const ballContext = canvas.getContext("2d");
const paddleContext = canvas.getContext("2d");

const BALL_SPEED = 5;
const BALL_SIZE = 10;
const PADDLE_SPEED = 8
const PADDLE_HEIGHT = 120
const PADDLE_WIDTH = 3
const MID_X = 485
const MID_Y = 285
const BASELINE_PLAYER_1 = 95

let increment_x = BALL_SPEED;
let increment_y = BALL_SPEED;
let ballX = MID_X;
let ballY = MID_Y;
let directionX = true
let directionY = true
let paddleY = MID_Y
let paddleYOld
let out = false

// can be up, down or null meaning not moving
let paddleMotionState; 

const screenHeight = 600
const screenWidth = 1000


canvas.height = screenHeight;
canvas.width = screenWidth;


canvas.style.border = "solid 1px black";

let interval;
let running = false;

document.addEventListener("keydown", function(event) {

  switch(event.keyCode){
    case 87: // "w"
      paddleMotionState = "up";
      break;

    case 83: // "s"
      paddleMotionState = "down";
      break;
  }

});

document.addEventListener("keyup", function(event) {
  switch(event.keyCode){
    case 87: // "w"
      paddleMotionState = null;
      break
    case 83: // "s"
      paddleMotionState = null;
      break
  }
});


function start() {
  interval = setInterval(function () {

    paddleContext.fillRect(BASELINE_PLAYER_1 - PADDLE_WIDTH, paddleY, PADDLE_WIDTH, PADDLE_HEIGHT);
    paddleContext.fillStyle = "black";

    reRenderPaddle()
    reRenderBall()

    if (ballX <= BASELINE_PLAYER_1) {

      // ball misses paddle
      if (ballY > paddleY + PADDLE_HEIGHT || ballY < paddleY - BALL_SIZE) {
        out = true;

      // ball hits paddle  
      } else {
        processPaddleHit()
      }
    }
    
    if (ballX <= 0) {
      gameOver()
      out = false
    }

  }, 5);
}

function processPaddleHit() {
  if (out) return;
  directionX = true;

  if (!paddleMotionState) {
    // paddle not moving

  } else if (paddleMotionState === "up") {
    if (directionY) {
      increment_x = increment_x * 1.1
      increment_y = increment_y * 0.9
    } else {
      increment_x = increment_x * 0.9
      increment_y = increment_y * 1.1
    }
    // console.log(`x: ${increment_x}, y: ${increment_y}`);
  } else {
    if (directionY) {
      increment_x = increment_x * 0.9
      increment_y = increment_y * 1.1
    } else {
      increment_x = increment_x * 1.1
      increment_y = increment_y * 0.9
    }
    // console.log(`x: ${increment_x}, y: ${increment_y}`);
  }
  
}

function reRenderPaddle() {
  if (!paddleMotionState){
    return;
  }
  paddleYOld = paddleY
  if (paddleMotionState === "up"){
    if (paddleY > 0) {
      paddleY -= PADDLE_SPEED
    }
  } else {
    if (paddleY < 480)
    paddleY += PADDLE_SPEED
  }

  paddleContext.clearRect(BASELINE_PLAYER_1 - PADDLE_WIDTH, paddleYOld, PADDLE_WIDTH, PADDLE_HEIGHT);
  paddleContext.fillRect(BASELINE_PLAYER_1 - PADDLE_WIDTH, paddleY, PADDLE_WIDTH, PADDLE_HEIGHT);
  paddleContext.fillStyle = "black";
  
}

function reRenderBall(){
  ballContext.clearRect(ballX, ballY, BALL_SIZE, BALL_SIZE)
  running = true;
  if (ballY >= screenHeight - BALL_SIZE){
      directionY = false
  } 
  if (ballY <= 0) directionY = true
  if (ballX >= screenWidth - BALL_SIZE) {
      directionX = false
  } 
  if (ballX <= 0) directionX = true
  ballX = directionX ? ballX + increment_x : ballX - increment_x
  ballY = directionY ? ballY + increment_y : ballY - increment_y
  ballContext.fillRect(ballX, ballY, BALL_SIZE, BALL_SIZE)
  
}

function stop() {
  if (running){
    clearInterval(interval)

  } else {
    start()
  }
}
 
function gameOver() {
  ballContext.clearRect(ballX, ballY, BALL_SIZE, BALL_SIZE)
  ballX = MID_X
  ballY = MID_Y
  directionX = true
  directionY = true
  increment_x = BALL_SPEED
  increment_y = BALL_SPEED
}

start()