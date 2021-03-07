import { generateConfig } from './config.js'

const config = generateConfig(64, 1, [ 16, 10 ])
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d', { alpha: false })

canvas.width = config.GAME_WIDTH
canvas.height = config.GAME_HEIGHT
ctx.imageSmoothingEnabled = false;

import Game from './game.js'
const game = new Game(config)

console.log('config', config)

let t1, t2
let measuredFps = 0
setInterval(() => { measuredFps = Math.round(1000/t2) }, 250)

function loop() {
  t2 = +new Date() - t1;
  t1 = +new Date()

  ctx.clearRect(0, 0, config.GAME_WIDTH, config.GAME_HEIGHT)

  game.update()
  game.draw(ctx)

  ctx.font = "24px monospace";
  ctx.fillStyle = 'yellow'
  ctx.fillText(`${measuredFps} fps`, 0 + 64, 0 + 32);

  requestAnimationFrame(loop)
}

requestAnimationFrame(loop)