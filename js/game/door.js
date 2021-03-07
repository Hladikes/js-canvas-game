import { Rectangle } from '../rectangle.js';
import { SpriteCollection } from '../sprite.js'

import { getRandomItem } from '../util.js'

export default class Floor extends Rectangle {
  
  constructor(game, posX, posY) {
    super(game.BLOCK_SIZE, game.BLOCK_SIZE, posX, posY, SpriteCollection.DOOR_LEFT)

    this.opened = false
    this._doorFloor = getRandomItem(SpriteCollection.FLOOR)
  }

  open() {
    this.opened = true
  }

  close() {
    this.opened = false
  }
  
  onCollide(target) {
    if (!this.opened) {
      target.flipDirection()
      target.move(target.speed)
    }
  }

  update() {
    this.background = this.opened 
      ? [ this._doorFloor, SpriteCollection.DOOR_LEFT_OPEN ]
      : SpriteCollection.DOOR_LEFT
  }

}