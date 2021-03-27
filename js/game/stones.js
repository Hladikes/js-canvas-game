import { Rectangle } from '../rectangle.js';
import { getRandomItem } from '../util.js';
import { SpriteCollection } from '../sprite.js'
import Config from '../config.js'

export default class Stones extends Rectangle {
  
  constructor(position) {
    super(Config.BLOCK_SIZE, Config.BLOCK_SIZE, position, [
      getRandomItem(SpriteCollection.FLOOR),
      getRandomItem(SpriteCollection.STONES),
    ])
    this.collidable = true
  }

  onCollide(target) {
    target.flipDirection()
    target.move()
  }

}