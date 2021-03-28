import { Rectangle } from '../rectangle.js';
import Config from '../config.js'
import Game from '../game.js'

export default class Teleport extends Rectangle {

  constructor(position, targetLevelIndex, teleportPosition) {
    super(Config.BLOCK_SIZE, Config.BLOCK_SIZE, position, 'transparent')
    this.targetLevelIndex = targetLevelIndex
    this.teleportPosition = teleportPosition
  }

  onCollide(collider) {
    Object.assign(collider.position, this.teleportPosition)
    Game.setLevel(this.targetLevelIndex)
  }

}