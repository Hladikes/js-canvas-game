import { generateConfig } from './config.js'

const config = generateConfig(64, 1, [ 16, 10 ])
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d', { alpha: false })

canvas.width = config.GAME_WIDTH
canvas.height = config.GAME_HEIGHT
ctx.imageSmoothingEnabled = false;

import Game from './game.js'
const game = new Game(config)

// console.log('config', config)

import FpsCounter from './fpsCounter.js'
const fpsCounter = new FpsCounter()

import { Sound, SoundCollection } from './sound.js'
const music = new Sound(SoundCollection.MUSIC, 0.4)
const wind = new Sound(SoundCollection.WIND, 0.02)
wind.play()
music.play()

function loop() {
  fpsCounter.timestamp()

  ctx.clearRect(0, 0, config.GAME_WIDTH, config.GAME_HEIGHT)

  game.update()
  game.draw(ctx)

  fpsCounter.draw(ctx)

  requestAnimationFrame(loop)
}

requestAnimationFrame(loop)