import { Rectangle } from '../rectangle.js';
import Game from '../game.js'

export default class Teleport extends Rectangle {

  constructor(width, height, position, target, teleportPosition) {
    super(width, height, position, 'transparent')
    this.target = target
    this.teleportPosition = teleportPosition
  }

  onCollide(collider) {
    Object.assign(collider.position, this.teleportPosition)
    Game.setLevel(this.target)
  }

}