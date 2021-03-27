import { Rectangle } from './rectangle.js';

export class MovingRectangle extends Rectangle {

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

export const Direction = {
  TOP: { dx: 0, dy: -1 },
  RIGHT: { dx: 1, dy: 0 },
  DOWN: { dx: 0, dy: 1 },
  LEFT: { dx: -1, dy: 0 },
  STAY: { dx: 0, dy: 0 },
}