import Door from './door.js'
import { MovingRectangle, Direction } from '../movingRectangle.js';
import LivingEntity from '../livingEntity.js'
import { SpriteCollection } from '../sprite.js'
import { keyboard } from '../keyboard.js'
import { Sound, SoundCollection } from '../sound.js'
import { getRandomItem } from '../util.js'
import Config from '../config.js'
import Inventory from '../inventory.js'

export default class Player extends LivingEntity {
  constructor(position) {
    const size = Config.BLOCK_SIZE * 0.7
    super(size, size, position, SpriteCollection.HERO)
    
    this.inventory = new Inventory(5)

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

  update(dt, obstacles) {
    if (this.health === 0) {
      this.width = Config.BLOCK_SIZE
      this.height = Config.BLOCK_SIZE
      this.background = SpriteCollection.SKULL[1]
      this.healthBarVisible = false
      return
    }

    let direction

    this.inventory.opened = keyboard.i

    if (keyboard.up) direction = Direction.TOP
    else if (keyboard.down) direction = Direction.DOWN
    else if (keyboard.right) {
      direction = Direction.RIGHT
      this.pdx = this.dx
    }
    else if (keyboard.left) {
      direction = Direction.LEFT
      this.pdx = this.dx
    }
    else direction = Direction.STAY
    
    if (this.dx === 0 && this.dy === 0) {
      this.background = (this.pdx === -1) 
        ? SpriteCollection.HERO_STATIONARY_REVERSE
        : SpriteCollection.HERO_STATIONARY
    } else {
      this.background = (this.pdx === -1) 
        ? SpriteCollection.HERO_REVERSE
        : SpriteCollection.HERO
    }

    this.setDirection(direction)
    this.move(dt)

    obstacles.forEach(obstacle => {
      this.checkCollision(obstacle)
    })
  }

  draw(ctx) {
    super.draw(ctx)
    this.inventory.draw(ctx)
  }

}