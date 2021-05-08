import Enemy from '../enemy.js';
import GameInstance from '../game.js';
import { SpriteCollection } from '../sprite.js';

export default class Zombie extends Enemy {
  constructor(position) {
    super(position, SpriteCollection.ZOMBIE, 115, 1000, 20, '#3D734F')
  }

  update() {
    super.update()

    if (this.health <= 0) return
    if (GameInstance.player.position.x > this.position.x) {
      this.background = SpriteCollection.ZOMBIE
    } else {
      this.background = SpriteCollection.ZOMBIE_REVERSE
    }
  }
}