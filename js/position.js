export class Position {
  constructor(posX = 0, posY = 0) {
    this.x = posX
    this.y = posY
  }
}

export function convertTilesPosition(tposX, tposY, block) {
  return new Position(tposX * block, tposY * block)
}