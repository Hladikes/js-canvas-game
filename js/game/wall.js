import { Rectangle } from '../rectangle.js';
import { getRandomItem } from '../util.js';

export default class Wall extends Rectangle {
  
  constructor(game, posX, posY, face) {
    if (face.constructor === Array) {
      face = getRandomItem(face)
    }

    super(game.BLOCK_SIZE, game.BLOCK_SIZE, posX, posY, face)
    this.collidable = true
  }

  onCollide(target) {
    target.flipDirection()
    target.move(target.speed)
  }

}