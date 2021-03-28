import Config from './config.js'
import { Sprite } from './sprite.js'

export default class Inventory {

  constructor(maxSize = 5) {
    this.maxSize = maxSize
    this.items = []
    this.opened = false
    this._itemSize = 72
    this._posX = (Config.GAME_WIDTH / 2) - ((this.maxSize * this._itemSize) / 2)
    this._posY = (Config.GAME_HEIGHT / 2) - (this._itemSize / 2)
    this._width = this.maxSize * this._itemSize
    this._height = this._itemSize
  } 

  add(item) {
    if (this.items.length === this.maxSize) return
    if (this.items.some(i => i._rid === item._rid)) return

    this.items.push(item)
    return true
  }

  remove(item) {
    const index = this.items.findIndex(i => i._rid === item._rid)
    if (index === -1) return
    this.items.splice(index, 1)
  }

  has(itemType, cb) {
    return this.items.some(item => {
      return item.constructor === itemType && (cb ? cb(item) : true)
    })
  }

  draw(ctx) {
    if (!this.opened) return
    
    ctx.fillStyle = 'rgba(0,0,0,0.75)'
    ctx.fillRect(this._posX + 10, this._posY + 10, this._width, this._height)
    ctx.fillStyle = '#764846'
    ctx.fillRect(this._posX, this._posY, this._width, this._height)
    ctx.fillStyle = 'rgba(255,255,255,0.1)'
    ctx.fillRect(this._posX, this._posY, this._width, this._height)

    
    this.items.forEach((item, index) => {
      if (item.background.constructor !== Sprite) return

      const posX = (index * this._itemSize) + this._posX
      item.background.draw(ctx, posX, this._posY, this._itemSize, this._itemSize)
    })
  }

}