import Enemy from '../enemy.js';
import GameInstance from '../game.js';
import { SpriteCollection } from '../sprite.js';

export default class Skeleton extends Enemy {
  constructor(position) {
    super(position, SpriteCollection.SKELETON, 75, 1500, 10, 'white')
  }

  update() {
    super.update()

    if (this.health <= 0) return
    if (GameInstance.player.position.x > this.position.x) {
      this.background = SpriteCollection.SKELETON
    } else {
      this.background = SpriteCollection.SKELETON_REVERSE
    }
  }
}