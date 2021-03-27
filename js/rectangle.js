import { Sprite } from './sprite.js'
import { generateId } from './util.js'
import { Position } from './position.js'

export class Rectangle {

  constructor(width = 16, height = 16, position = new Position(0, 0), background = 'transparent') {
    this.width = width 
    this.height = height 
    this.position = position
    this.background = background
    this.defaultBackground = background
    this.state = {}
    this._rid = generateId(30)

    this._debug = false
  }

  checkCollision(target) {
    const isColliding = (
      this.position.x + this.width >= target.position.x &&
      this.position.x < target.position.x + target.width &&
      this.position.y + this.height >= target.position.y &&
      this.position.y < target.position.y + target.height
    )

    if (isColliding) target.onCollide(this)
  }

  onCollide(target) {}

  update() {}

  draw(ctx) {
    if (this._debug) {
      ctx.font = "16px monospace";
      ctx.fillStyle = 'cyan'
      ctx.fillText(`${JSON.stringify(this.state)}`, this.position.x, this.position.y - 16);
    }

    switch (this.background.constructor) {
      case String: 
        ctx.fillStyle = this.background
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        break;

      case Sprite: 
        this.background.draw(ctx, this.position.x, this.position.y, this.width, this.height)
        break;

      case Array: 
        this.background.forEach(sprite => {
          sprite.draw(ctx, this.position.x, this.position.y, this.width, this.height)
        })
        break;
    }
  }

}