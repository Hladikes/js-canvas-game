import Item from '../item.js';
import Config from '../config.js'
import { SpriteCollection } from '../sprite.js';
import Game from '../game.js'

export default class Key extends Item {

  constructor(position) {
    const size = Config.BLOCK_SIZE * 0.75
    super(size, size, position, SpriteCollection.HEALTH_POTION)
  }

  onCollide(collider) {
    collider.heal(50)
    Game.getCurrentLevel().removeRectangle(this)
  }

}