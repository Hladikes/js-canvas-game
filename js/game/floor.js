import { Rectangle } from '../rectangle.js';
import { SpriteCollection } from '../sprite.js'

import { getRandomItem } from '../util.js'

export default class Floor extends Rectangle {
  
  constructor(game, position) {
    super(game.BLOCK_SIZE, game.BLOCK_SIZE, position, getRandomItem(SpriteCollection.FLOOR))
  }

}