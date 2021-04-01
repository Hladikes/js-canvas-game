import Config from './config.js'

export class Position {
  constructor(posX = 0, posY = 0) {
    this.x = posX
    this.y = posY
  }
}

export function convertTilesPosition(tposX, tposY) {
  return new Position(tposX * Config.BLOCK_SIZE, tposY * Config.BLOCK_SIZE)
}

export function clonePosition(p) {
  return new Position(p.x, p.y)
}