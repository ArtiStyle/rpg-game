import './index.scss';
import ClientGame from './client/ClientGame';

window.addEventListener('load', () => {
  ClientGame.init({ tagId: 'game' });
});

// import SenseiWalk from './assets/Male-2-Walk.png';
// import terrainAtlas from './assets/terrain.png';
// import worldConfig from './configs/world.json';
// import sprites from './configs/sprites.js';

// const canvas = document.getElementById('game');
// const ctx = canvas.getContext('2d');

// const spriteW = 48;
// const spriteH = 48;
// const canvasW = canvas.width;
// const canvasH = canvas.height;

// const terrain = document.createElement('img');
// terrain.src = terrainAtlas;

// terrain.addEventListener('load', () => {
//   const { map } = worldConfig;
//   map.forEach((cfgRow, y) => {
//     cfgRow.forEach((cfgCell, x) => {
//       const [sX, sY, sW, sH] = sprites.terrain[cfgCell[0]].frames[0];
//       ctx.drawImage(terrain, sX, sY, sW, sH, x * spriteW, y * spriteH, spriteW, spriteH);
//     });
//   });
// });

// const shots = 3;
// let cycle = 0;
// let activeSpriteY = 0;

// let pY = (canvasH - spriteH) / 2;
// let pX = (canvasW - spriteW) / 2;
// const step = 10;

// let bottomPressed = false;
// let upPressed = false;
// let leftPressed = false;
// let rightPressed = false;

// // Direction

// function keyDownHandler(e) {
//   if (e.key === 'Down' || e.key === 'ArrowDown') {
//     bottomPressed = true;
//   }
//   if (e.key === 'Left' || e.key === 'ArrowLeft') {
//     leftPressed = true;
//   }
//   if (e.key === 'Right' || e.key === 'ArrowRight') {
//     rightPressed = true;
//   }
//   if (e.key === 'Up' || e.key === 'ArrowUp') {
//     upPressed = true;
//   }
// }

// function keyUpHandler(e) {
//   if (e.key === 'Down' || e.key === 'ArrowDown') {
//     bottomPressed = false;
//   }
//   if (e.key === 'Left' || e.key === 'ArrowLeft') {
//     leftPressed = false;
//   }
//   if (e.key === 'Right' || e.key === 'ArrowRight') {
//     rightPressed = false;
//   }
//   if (e.key === 'Up' || e.key === 'ArrowUp') {
//     upPressed = false;
//   }
// }

// document.addEventListener('keydown', keyDownHandler);
// document.addEventListener('keyup', keyUpHandler);

// const img = document.createElement('img');
// img.src = SenseiWalk;

// img.addEventListener('load', () => {
//   setInterval(() => {
//     ctx.clearRect(0, 0, canvasW, canvasH);

//     if (bottomPressed) {
//       cycle = (cycle + 1) % shots;
//       pY += step;
//       activeSpriteY = spriteH * 0;
//     }

//     if (upPressed) {
//       cycle = (cycle + 1) % shots;
//       pY -= step;
//       activeSpriteY = spriteH * 3;
//     }

//     if (leftPressed) {
//       cycle = (cycle + 1) % shots;
//       activeSpriteY = spriteH * 1;
//       pX -= step;
//     }

//     if (rightPressed) {
//       cycle = (cycle + 1) % shots;
//       pX += step;
//       activeSpriteY = spriteH * 2;
//     }

//     if (pX + spriteW > canvasW) {
//       pX = canvasW - spriteW;
//     }

//     if (pX < 0) {
//       pX = 0;
//     }

//     if (pY + spriteH > canvasH) {
//       pY = canvasH - spriteH;
//     }

//     if (pY < 0) {
//       pY = 0;
//     }

//     ctx.drawImage(img, cycle * spriteW, activeSpriteY, spriteW, spriteW, pX, pY, spriteW, spriteH);
//   }, 120);
// });
