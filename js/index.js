import Config from './config.js'
import Game from './game.js'
import FpsCounter from './fpsCounter.js'
import { Sound, SoundCollection } from './sound.js'
import MenuController from './menuController.js'
import SoundManager from './soundManager.js'
import { keyboard } from './keyboard.js'

let muted = false

window.onload = () => {
  MenuController.init({
    startGame() {
      game()
    },

    resumeGame() {
      Game.resume()
      if (!muted) {
        SoundManager.sounds.forEach(sound => {
          sound.unmute();
        })
      }
    }
  })

  document.getElementById('muteBtn').addEventListener('click', event => {
    event.target.innerText = muted ? '🔊' : '🔇'
    SoundManager.sounds.forEach(sound => {
      sound[muted ? 'unmute' : 'mute']()
    })
    muted = !muted
  })
}

const game = () => {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d', { alpha: false })

  canvas.width = Config.GAME_WIDTH
  canvas.height = Config.GAME_HEIGHT
  ctx.imageSmoothingEnabled = false;

  const music = new Sound(SoundCollection.MUSIC, 0.2, true)
  const wind = new Sound(SoundCollection.WIND, 0.03, true)
  wind.play()
  music.play()

  function loop() {
    if (keyboard.escape) {
      MenuController.showView('escapeMenu')
      Game.pause()
      SoundManager.sounds.forEach(sound => {
        sound.mute();
      })
    }

    FpsCounter.timestamp()

    ctx.clearRect(0, 0, Config.GAME_WIDTH, Config.GAME_HEIGHT)

    Game.update()
    Game.draw(ctx)
    FpsCounter.draw(ctx)

    setTimeout(() => requestAnimationFrame(loop), 1000 / 75)
    // requestAnimationFrame(loop)
  }

  requestAnimationFrame(loop)
}