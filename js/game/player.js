import Door from './door.js'
import { MovingRectangle, Direction } from '../movingRectangle.js';
import { SpriteCollection } from '../sprite.js'
import { keyboard } from '../keyboard.js'

export default class Player extends MovingRectangle {

  constructor(game, posX, posY) {
    
    const size = game.BLOCK_SIZE * 0.7
    super(size, size, posX, posY, SpriteCollection.HERO)
    
    this.game = game
    this.speed = 5
    // Previous direction x
    this.pdx = 1
  }

  update(obstacles) {
    let direction
    if (keyboard.up) direction = Direction.TOP
    else if (keyboard.down) direction = Direction.DOWN
    else if (keyboard.right) {
      this.pdx = this.dx
      direction = Direction.RIGHT
    }
    else if (keyboard.left) {
      this.pdx = this.dx
      direction = Direction.LEFT
    }
    else direction = Direction.STAY

    if (keyboard.k) {
      this.game.gameObjects.forEach(obj => {
        if (obj.constructor === Door) {
          obj.close()
        }
      })
    }

    if (keyboard.o) {
      this.game.gameObjects.forEach(obj => {
        if (obj.constructor === Door) {
          obj.open()
        }
      })
    }

    this.background = this.pdx === -1 ? SpriteCollection.HERO_REVERSE : SpriteCollection.HERO

    this.setDirection(direction)
    this.move()

    obstacles.forEach(obstacle => {
      this.checkCollision(obstacle)
    })
  }

}