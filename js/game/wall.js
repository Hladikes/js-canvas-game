import { Rectangle } from '../rectangle.js';
import { getRandomItem } from '../util.js';

export default class Wall extends Rectangle {
  
  constructor(game, position, face) {
    if (face.constructor === Array) {
      face = getRandomItem(face)
    }

    super(game.BLOCK_SIZE, game.BLOCK_SIZE, position, face)
    this.collidable = true
  }

  onCollide(target) {
    target.flipDirection()
    target.move(target.speed)
  }

}