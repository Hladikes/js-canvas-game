import Enemy from '../enemy.js';
import GameInstance from '../game.js';
import { SpriteCollection } from '../sprite.js';

export default class ZombieSkull extends Enemy {
  constructor(position) {
    super(position, SpriteCollection.ZOMBIE_SKULL, 135, 1000, 25, '#DA4E38')
  }

  update() {
    super.update()

    if (this.health <= 0) return
    if (GameInstance.player.position.x > this.position.x) {
      this.background = SpriteCollection.ZOMBIE_SKULL
    } else {
      this.background = SpriteCollection.ZOMBIE_SKULL_REVERSE
    }
  }
}