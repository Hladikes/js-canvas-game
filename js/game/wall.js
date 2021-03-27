import { Rectangle } from '../rectangle.js';
import { getRandomItem } from '../util.js';
import Config from '../config.js'
export default class Wall extends Rectangle {
  
  constructor(position, face) {
    if (face.constructor === Array) {
      face = getRandomItem(face)
    }

    super(Config.BLOCK_SIZE, Config.BLOCK_SIZE, position, face)
    this.collidable = true
  }

  onCollide(target) {
    target.flipDirection()
    target.move()
  }

}