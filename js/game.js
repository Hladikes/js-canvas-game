import Player from './game/player.js'
import { level1, level2 } from './levels.js'
import { Position } from './position.js'

export default class Game {

  constructor(config) {
    Object.assign(this, config)

    this.player = new Player(this, new Position(this.BLOCK_SIZE, this.BLOCK_SIZE))
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

  getCurrentLevel() {
    return this.levels[this.levelIndex]
  }

  update() {
    this.getCurrentLevel().forEach(gameObject => {
      gameObject.update()
    })

    this.player.update(this.getCurrentLevel())
  }

  draw(ctx) {
    this.getCurrentLevel().forEach(gameObject => {
      gameObject.draw(ctx)
    })

    this.player.draw(ctx)
  }

}