import Player from './game/player.js'
import { convertTilesPosition } from './position.js'
import Gravity from './enums/gravity.js'
import Config from './config.js'
import LevelOne from './levels/LevelOne.js'

class Game {

  constructor() {
    this.player = new Player(convertTilesPosition(1, 1))
    this.player.setHorizontalGravity(Gravity.CENTER)
    this.player.setVerticalGravity(Gravity.CENTER)
    
    this.paused = false
    this.levelIndex = 0
    this.levels = [
      new LevelOne(this.player)
    ]
  }

  pause() {
    this.paused = true
  }

  resume() {
    this.paused = false
  }

  setLevel(index) {
    if (index >= 0 && index < this.levels.length) {
      this.levelIndex = index
    }
  }

  getCurrentLevel() {
    return this.levels[this.levelIndex]
  }

  update() {
    if (this.paused) return
    this.getCurrentLevel().update()
  }
  
  draw(ctx) {
    if (this.paused) return
    this.getCurrentLevel().draw(ctx)
  }

}

const GameInstance = new Game()
export default GameInstance