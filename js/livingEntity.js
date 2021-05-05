import GameInstance from './game.js'
import MovingRectangle from './movingRectangle.js'
import Config from './config.js'
import { SpriteCollection } from './sprite.js'

export default class LivingEntity extends MovingRectangle {

  constructor(width, height, position, background, health = 100) {
    super(width, height, position, background)
    this.health = health
    this.maxHealth = health
    this.healthBarVisible = true
    this.canShootProjectiles = false
    this._lastShotProjectileTimestamp = 0
  }

  shootProjectile(p) {
    if (!this.canShootProjectiles) return
    
    let d = +new Date()
    if (d - this._lastShotProjectileTimestamp > 750) {
      this._lastShotProjectileTimestamp = d
      GameInstance.projectiles.add(p)
    }
  }

  damage(n) {
    this.health -= n
    if (this.health < 0) {
      this.health = 0
    }
  }

  heal(n) {
    this.health += n
    if (this.health > 100) {
      this.health = 100
    }
  }

  getHealth() {
    return this.health / this.maxHealth
  }

  update() {
    if (this.health <= 0) {
      this.width = Config.BLOCK_SIZE
      this.height = Config.BLOCK_SIZE
      this.background = SpriteCollection.SKULL[1]
      this.healthBarVisible = false
      return
    }
    super.update()
  }

  draw(ctx) {
    super.draw(ctx)
    if (!this.healthBarVisible) return

    ctx.fillStyle = 'black'
    ctx.fillRect(this.position.x, this.position.y - 16, this.width, 8)
    ctx.fillStyle = '#CC3030'
    ctx.fillRect(this.position.x, this.position.y - 16, this.width * this.getHealth(), 8)
  }

}