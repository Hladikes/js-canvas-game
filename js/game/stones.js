import { Rectangle } from '../rectangle.js';
import { getRandomItem } from '../util.js';
import { SpriteCollection } from '../sprite.js'

export default class Stones extends Rectangle {
  
  constructor(game, posX, posY) {
    super(game.BLOCK_SIZE, game.BLOCK_SIZE, posX, posY, [
      getRandomItem(SpriteCollection.FLOOR),
      getRandomItem(SpriteCollection.STONES),
    ])
    this.collidable = true
  }

  onCollide(target) {
    target.flipDirection()
    target.move(target.speed)
  }

}