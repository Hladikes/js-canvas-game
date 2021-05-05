import Enemy from '../enemy.js';
import GameInstance from '../game.js';
import { SpriteCollection } from '../sprite.js';

export default class Slime extends Enemy {
  constructor(position) {
    super(position, SpriteCollection.SLIME, 100, 1000, 20, '#7FDC4C')
  }

  update() {
    super.update()

    if (this.health <= 0) return
    if (GameInstance.player.position.x > this.position.x) {
      this.background = SpriteCollection.SLIME
    } else {
      this.background = SpriteCollection.SLIME_REVERSE
    }
  }
}