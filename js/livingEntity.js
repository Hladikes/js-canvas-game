import MovingRectangle from './movingRectangle.js'

export default class LivingEntity extends MovingRectangle {

  constructor(width, height, position, background, health = 100) {
    super(width, height, position, background)
    this.health = health
    this.maxHealth = health
    this.healthBarVisible = true
  }

  damage(n) {
    this.health -= n
    if (this.health < 0) {
      this.health = 0
      console.log('ded')
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

  draw(ctx) {
    super.draw(ctx)
    if (!this.healthBarVisible) return

    ctx.fillStyle = 'black'
    ctx.fillRect(this.position.x, this.position.y - 16, this.width, 8)
    ctx.fillStyle = '#CC3030'
    ctx.fillRect(this.position.x, this.position.y - 16, this.width * this.getHealth(), 8)
  }

}