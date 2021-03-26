import { Rectangle } from '../rectangle.js';

export default class Teleport extends Rectangle {

  constructor(game, width, height, position, target, teleportPosition) {
    super(width, height, position, 'transparent')
    this.game = game
    this.target = target
    this.teleportPosition = teleportPosition
  }

  onCollide(collider) {
    Object.assign(collider.position, this.teleportPosition)
    this.game.setLevel(this.target)
  }

}