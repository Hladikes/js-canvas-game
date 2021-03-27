import Item from '../item.js';
import Config from '../config.js'
import { SpriteCollection } from '../sprite.js';

export default class Key extends Item {

  constructor(position, doorId, golden = false) {
    const size = Config.BLOCK_SIZE * 0.75
    super(size, size, position, golden ? SpriteCollection.KEY_GOLDEN : SpriteCollection.KEY_SILVER)
    this.doorId = doorId
  }

}