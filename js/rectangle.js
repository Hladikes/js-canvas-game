import { Sprite } from './sprite.js'
import { generateId } from './util.js'

export class Rectangle {

  constructor(width = 16, height = 16, posX = 0, posY = 0, background = 'transparent') {
    this.width = width 
    this.height = height 
    this.posX = posX 
    this.posY = posY 
    this.background = background
    this.defaultBackground = background
    this.state = {}
    this.id = generateId(30)

    this._debug = false
  }

  checkCollision(target) {
    const isColliding = (
      this.posX + this.width >= target.posX &&
      this.posX < target.posX + target.width &&
      this.posY + this.height >= target.posY &&
      this.posY < target.posY + target.height
    )

    if (isColliding) target.onCollide(this)
  }

  onCollide(target) {}

  update() {}

  draw(ctx) {
    if (this._debug) {
      ctx.font = "16px monospace";
      ctx.fillStyle = 'cyan'
      ctx.fillText(`${JSON.stringify(this.state)}`, this.posX, this.posY - 16);
    }

    switch (this.background.constructor) {
      case String: 
        ctx.fillStyle = this.background
        ctx.fillRect(this.posX, this.posY, this.width, this.height)
        break;

      case Sprite: 
        this.background.draw(ctx, this.posX, this.posY, this.width, this.height)
        break;

      case Array: 
        this.background.forEach(sprite => {
          sprite.draw(ctx, this.posX, this.posY, this.width, this.height)
        })
        break;
    }
  }

}