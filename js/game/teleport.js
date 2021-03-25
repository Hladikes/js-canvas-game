import { Rectangle } from '../rectangle.js';

export default class Teleport extends Rectangle {

  constructor(game, width, height, posX, posY, target, tposX, tposY) {
    super(width, height, posX, posY, 'transparent')
    this.game = game
    this.target = target
    this.tposX = tposX
    this.tposY = tposY
  }

  onCollide(collider) {
    collider.posX = this.tposX
    collider.posY = this.tposY
    this.game.setLevel(this.target)
  }

}