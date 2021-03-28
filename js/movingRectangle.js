import { Rectangle } from './rectangle.js';

export default class MovingRectangle extends Rectangle {

  constructor(width, height, position, background) {
    super(width, height, position, background)

    this.speed = 5
    this.dx = 0
    this.dy = 0
  }

  setDirection(d) {
    Object.assign(this, d)
  }

  flipDirection() {
    this.dx *= -1
    this.dy *= -1
  }

  move(dt = 1, n = this.speed) {
    this.position.x += (n * this.dx) * dt
    this.position.y += (n * this.dy) * dt
  }

}