import Direction from '../enums/direction.js'
import LivingEntity from '../livingEntity.js'
import { SpriteCollection } from '../sprite.js'
import { keyboard } from '../keyboard.js'
import { Sound, SoundCollection } from '../sound.js'
import { getRandomItem } from '../util.js'
import Config from '../config.js'
import Inventory from '../inventory.js'
import Projectile from '../projectile.js'

export default class Player extends LivingEntity {
  constructor(position) {
    const size = Config.BLOCK_SIZE * 0.65
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

    // this._godMode = true
  }

  update() {
    if (this.health <= 0) {
      clearInterval(this._soundInterval)
      this.width = Config.BLOCK_SIZE
      this.height = Config.BLOCK_SIZE
      this.background = SpriteCollection.SKULL[1]
      this.healthBarVisible = false
      return
    }
    
    let direction

    this.inventory.opened = keyboard.i

    if (keyboard.w) direction = Direction.TOP
    else if (keyboard.s) direction = Direction.DOWN
    else if (keyboard.d) {
      direction = Direction.RIGHT
      this.pdx = direction.dx
    }
    else if (keyboard.a) {
      direction = Direction.LEFT
      this.pdx = direction.dx
    }
    else direction = Direction.STAY

    let shootDirection = null
    if (keyboard.arrowright) shootDirection = Direction.RIGHT
    if (keyboard.arrowdown) shootDirection = Direction.DOWN
    if (keyboard.arrowleft) shootDirection = Direction.LEFT
    if (keyboard.arrowup) shootDirection = Direction.TOP

    if (shootDirection && this.canShoot()) {
      this.shootProjectile(new Projectile(
        this, this.position, shootDirection, 'cyan', this._godMode ? 199999 : 19, 10
      ))
    }
    
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
    this.move()
  }

  draw(ctx) {
    super.draw(ctx)
    this.inventory.draw(ctx)
  }

}