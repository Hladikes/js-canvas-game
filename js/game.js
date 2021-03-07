import Player from './game/player.js'
import { level1 } from './levels.js'

export default class Game {

  constructor(config) {
    Object.assign(this, config)

    this.player = new Player(this, this.BLOCK_SIZE, this.BLOCK_SIZE)

    this.gameObjects = level1(this)
  }

  update() {
    this.gameObjects.forEach(gameObject => {
      gameObject.update()
    })

    this.player.update(this.gameObjects)
  }

  draw(ctx) {
    this.gameObjects.forEach(gameObject => {
      gameObject.draw(ctx)
    })

    this.player.draw(ctx)
  }

}