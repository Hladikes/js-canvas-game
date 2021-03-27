import Config from './config.js'
import Game from './game.js'
import FpsCounter from './fpsCounter.js'
import { Sound, SoundCollection } from './sound.js'

window.onload = () => {
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
    const dt = FpsCounter.timestamp()

    ctx.clearRect(0, 0, Config.GAME_WIDTH, Config.GAME_HEIGHT)

    Game.update(dt)
    Game.draw(ctx)
    FpsCounter.draw(ctx)

    // setTimeout(() => requestAnimationFrame(loop), 1000/30)
    requestAnimationFrame(loop)
  }

  requestAnimationFrame(loop)
}