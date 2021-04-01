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
    
    this.levelIndex = 0
    this.levels = [
      new LevelOne(this.player)
    ]
  }

  setLevel(index) {
    if (index >= 0 && index < this.levels.length) {
      this.levelIndex = index
    }
  }

  getCurrentLevel() {
    return this.levels[this.levelIndex]
  }

  update(dt) {
    this.getCurrentLevel().update(dt)
  }

  draw(ctx) {
    this.getCurrentLevel().draw(ctx)
  }

}

const GameInstance = new Game()
export default GameInstance