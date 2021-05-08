import Enemy from '../enemy.js';
import GameInstance from '../game.js';
import MenuController from '../menuController.js';
import { SpriteCollection } from '../sprite.js';

export default class Demon extends Enemy {
  constructor(position) {
    super(position, SpriteCollection.DEMON, 200, 500, 40, '#9F294E')
  }

  update() {
    super.update()

    if (this.health <= 0) {
      MenuController.showView('win')
      return
    }

    if (GameInstance.player.position.x > this.position.x) {
      this.background = SpriteCollection.DEMON
    } else {
      this.background = SpriteCollection.DEMON_REVERSE
    }
  }
}