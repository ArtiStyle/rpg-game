import './index.scss';
import SenseiWalk from './assets/Male-3-Walk.png';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const img = document.createElement('img');
img.src = SenseiWalk;

const loading = document.getElementById('loading');

const spriteDirectionMap = {
  down: 0,
  left: 48,
  right: 96,
  up: 144,
};

let spriteDirection = spriteDirectionMap.down;

const spriteW = 48;
const spriteH = 48;
const shots = 3;

let cycle = 0;
let pX = 300 - spriteW / 2;
let pY = 300 - spriteH / 2;

let bottomPressed = false;
let leftPressed = false;
let rightPressed = false;
let upPressed = false;

const keyDownHandler = (e) => {
  if (e.key === 'ArrowDown' || e.key === 'Down') {
    bottomPressed = true;
  }
  if (e.key === 'ArrowUp' || e.key === 'Up') {
    upPressed = true;
  }
  if (e.key === 'ArrowLeft' || e.key === 'Left') {
    leftPressed = true;
  }
  if (e.key === 'ArrowRight' || e.key === 'Right') {
    rightPressed = true;
  }
};

const keyUpHandler = (e) => {
  switch (e.key) {
    case 'ArrowDown':
    case 'Down':
      bottomPressed = false;
      break;
    case 'ArrowUp':
    case 'Up':
      upPressed = false;
      break;
    case 'ArrowLeft':
    case 'Left':
      leftPressed = false;
      break;
    case 'ArrowRight':
    case 'Right':
      rightPressed = false;
      break;
    default:
  }

  rightPressed = false;
  leftPressed = false;
  upPressed = false;
};

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

img.addEventListener('load', () => {
  loading.remove();

  setInterval(() => {
    if (bottomPressed) {
      cycle = (cycle + 1) % shots;
      pY += 10;
      spriteDirection = spriteDirectionMap.down;
    }
    if (rightPressed) {
      cycle = (cycle + 1) % shots;
      pX += 10;
      spriteDirection = spriteDirectionMap.right;
    }
    if (upPressed) {
      cycle = (cycle + 1) % shots;
      pY -= 10;
      spriteDirection = spriteDirectionMap.up;
    }
    if (leftPressed) {
      cycle = (cycle + 1) % shots;
      pX -= 10;
      spriteDirection = spriteDirectionMap.left;
    }
    if (pX < 0) pX = 0;
    if (pX > 600 - spriteW) pX = 600 - spriteW;
    if (pY < 0) pY = 0;
    if (pY > 600 - spriteH) pY = 600 - spriteH;

    ctx.clearRect(0, 0, 600, 600);
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(137, 271);
    ctx.lineTo(165, 203);
    ctx.lineTo(107, 160);
    ctx.lineTo(181, 161);
    ctx.lineTo(209, 90);
    ctx.lineTo(235, 160);
    ctx.lineTo(310, 164);
    ctx.lineTo(251, 202);
    ctx.lineTo(276, 276);
    ctx.lineTo(207, 231);
    ctx.lineTo(138, 274);
    ctx.stroke();
    ctx.closePath();

    ctx.drawImage(img, cycle * spriteW, spriteDirection, spriteW, spriteH, pX, pY, 48, 48);
  }, 120);
});
