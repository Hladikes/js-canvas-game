import Player from './game/player.js'
import { level1, level2 } from './levels.js'
import { Position } from './position.js'
import Gravity from './gravity.js'
import Config from './config.js'

class Game {

  constructor() {
    this.player = new Player(new Position(Config.BLOCK_SIZE, Config.BLOCK_SIZE))
    this.player.setHorizontalGravity(Gravity.END)
    this.player.setVerticalGravity(Gravity.END)
    
    this.levelIndex = 0
    this.levels = [
      level1(this),
      level2(this)
    ]
  }

  setLevel(index) {
    if (index >= 0 && index < this.levels.length) {
      this.levelIndex = index
    }
  }

  remove(obj) {
    if (!obj._rid) {
      console.error('Object is not instance of Rectangle class', obj)
      return
    }

    const index = this.getCurrentLevel().findIndex(i => i._rid === obj._rid)
    if (index === -1) return
    this.getCurrentLevel().splice(index, 1)
  }

  getCurrentLevel() {
    return this.levels[this.levelIndex]
  }

  update(dt) {
    this.getCurrentLevel().forEach(gameObject => {
      gameObject.update(dt)
    })

    this.player.update(dt, this.getCurrentLevel())
  }

  draw(ctx) {
    this.getCurrentLevel().forEach(gameObject => {
      gameObject.draw(ctx)
    })

    this.player.draw(ctx)
  }

}

const GameInstance = new Game()
export default GameInstance