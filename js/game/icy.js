import Enemy from '../enemy.js';
import GameInstance from '../game.js';
import { SpriteCollection } from '../sprite.js';

export default class Icy extends Enemy {
  constructor(position) {
    super(position, SpriteCollection.ICY, 100, 500, 9, '#72D6CE')
  }

  update() {
    super.update()

    if (this.health <= 0) return
    if (GameInstance.player.position.x > this.position.x) {
      this.background = SpriteCollection.ICY
    } else {
      this.background = SpriteCollection.ICY_REVERSE
    }
  }
}