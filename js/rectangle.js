import { Sprite } from './sprite.js'
import { generateId } from './util.js'
import { Position, clonePosition } from './position.js'
import Config from './config.js'

export class Rectangle {

  constructor(width = 16, height = 16, position = new Position(0, 0), background = 'transparent') {
    this.width = width 
    this.height = height 
    this.position = clonePosition(position)
    this.defaultPosition = clonePosition(position)
    this.background = background
    this.defaultBackground = background
    
    this._rid = generateId(30)
    this._debugInfo = {}
    this._debug = false
    this._boundingBoxVisible = false
  }

  setHorizontalGravity(g) {
    this.position.x += (Config.BLOCK_SIZE * g) - (this.width * g)
  }

  setVerticalGravity(g) {
    this.position.y += (Config.BLOCK_SIZE * g) - (this.height * g)
  }

  setGravity(gx, gy) {
    this.setHorizontalGravity(gx)
    this.setVerticalGravity(gy)
  }

  resetGravity() {
    this.position = this.defaultPosition
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
      ctx.fillText(`${JSON.stringify(this._debugInfo)}`, this.position.x, this.position.y - 16);
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

    if (this._boundingBoxVisible) {
      ctx.beginPath()
      ctx.strokeStyle = 'cyan'
      ctx.moveTo(this.position.x, this.position.y)
      ctx.lineTo(this.position.x + this.width, this.position.y)
      ctx.lineTo(this.position.x + this.width, this.position.y + this.height)
      ctx.lineTo(this.position.x, this.position.y + this.height)
      ctx.lineTo(this.position.x, this.position.y)
      ctx.stroke()
    }
  }

}