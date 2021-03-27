import { Rectangle } from '../rectangle.js';
import { SpriteCollection } from '../sprite.js'
import Config from '../config.js'
import { getRandomItem } from '../util.js'

export default class Floor extends Rectangle {
  
  constructor(position) {
    super(Config.BLOCK_SIZE, Config.BLOCK_SIZE, position, getRandomItem(SpriteCollection.FLOOR))
  }

}