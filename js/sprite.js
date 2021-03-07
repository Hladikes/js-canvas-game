export class Sprite {

  constructor(img, sx = 0, sy = 0, sw = 16, sh = 16) {
    this.img = img
    this.sx = sx
    this.sy = sy
    this.sw = sw
    this.sh = sh
  }

  draw(ctx, posX = 0, posY = 0, width = 16, height = 16) {
    ctx.drawImage(this.img, this.sx, this.sy, this.sw, this.sh, posX, posY, width, height)
  }

}

const tileset = new Image()
tileset.src = '../assets/tileset.png'

const tileset3 = new Image()
tileset3.src = '../assets/tileset3.png'

const tileset3reversed = new Image()
tileset3reversed.src = '../assets/tileset3_reversed.png'

export const SpriteCollection = {
  HERO: new Sprite(tileset3, 128, 224, 16, 16),
  HERO_REVERSE: new Sprite(tileset3reversed, 16*7, 16*14, 16, 16),
  DEMON: new Sprite(tileset3, 48, 224-48, 16, 16),
  WALL_TOP: [
    new Sprite(tileset, 16, 0, 16, 16),
    new Sprite(tileset, 16*2, 0, 16, 16),
    new Sprite(tileset, 16*3, 0, 16, 16),
  ],
  WALL_LEFT: new Sprite(tileset, 0, 0, 16, 16),
  WALL_BOTTOM: new Sprite(tileset, 16, 4*16, 16, 16),
  WALL_BOTTOM_LEFT: new Sprite(tileset, 0, 4*16, 16, 16),
  WALL_BOTTOM_RIGHT: new Sprite(tileset, 5*16, 4*16, 16, 16),
  WALL_RIGHT: new Sprite(tileset, 5*16, 3*16, 16, 16),
  SKULL: [
    new Sprite(tileset, 7*16, 7*16, 16, 16),
    new Sprite(tileset, 8*16, 6*16, 16, 16)
  ],
  BALL: new Sprite(tileset, 6*16, 8*16, 16, 16),
  DOOR_LEFT: new Sprite(tileset, 6*16, 3*16, 16, 16),
  DOOR_LEFT_OPEN: new Sprite(tileset, 7*16, 5*16, 16, 16),
  DOOR_RIGHT: new Sprite(tileset, 7*16, 3*16, 16, 16),
  DOOR_RIGHT_OPEN: new Sprite(tileset, 8*16, 5*16, 16, 16),
  FLOOR: [
    new Sprite(tileset, 6 * 16, 0, 16, 16),
    new Sprite(tileset, 7 * 16, 0, 16, 16),
    new Sprite(tileset, 8 * 16, 0, 16, 16),
    new Sprite(tileset, 9 * 16, 0, 16, 16),
    new Sprite(tileset, 6 * 16, 16, 16, 16),
    new Sprite(tileset, 7 * 16, 16, 16, 16),
    new Sprite(tileset, 8 * 16, 16, 16, 16),
    new Sprite(tileset, 9 * 16, 16, 16, 16),
  ],
  STONES: [
    new Sprite(tileset, 9 * 16, 16 * 4, 16, 16),
    new Sprite(tileset, 9 * 16, 16 * 5, 16, 16),
  ]
}