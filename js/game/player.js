import Door from './door.js'
import { MovingRectangle, Direction } from '../movingRectangle.js';
import { SpriteCollection } from '../sprite.js'
import { keyboard } from '../keyboard.js'
import { Sound, SoundCollection } from '../sound.js'
import { getRandomItem } from '../util.js'

export default class Player extends MovingRectangle {

  constructor(game, position) {
    
    const size = game.BLOCK_SIZE * 0.7
    super(size, size, position, SpriteCollection.HERO)
    
    this.game = game
    this.speed = 5
    // Previous direction x
    this.pdx = 1

    this.footstepSounds = [
      new Sound(SoundCollection.FOOTSTEP_1, 0.075),
      new Sound(SoundCollection.FOOTSTEP_2, 0.075)
    ]

    this._soundInterval = setInterval(() => {
      if (this.dx !== 0 || this.dy !== 0) {
        getRandomItem(this.footstepSounds).play()
      }
    }, 300)
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
      this.game.getCurrentLevel().forEach(obj => {
        if (obj.constructor === Door) {
          obj.close()
        }
      })
    }

    if (keyboard.o) {
      this.game.getCurrentLevel().forEach(obj => {
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