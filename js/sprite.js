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

export function animate(sprites, delay = 100) {
  return (() => {
    let index = 0
    let sprite = new Sprite()
    Object.assign(sprite, sprites[index])
    
    setInterval(() => {
      Object.assign(sprite, sprites[index])
      index++
      if (index === sprites.length) index = 0
    }, delay)

    return sprite
  })()
}

const tileset = new Image()
tileset.src = '../assets/tileset.png'

const tileset3 = new Image()
tileset3.src = '../assets/tileset3.png'

const tileset3reversed = new Image()
tileset3reversed.src = '../assets/tileset3_reversed.png'

const tileset5 = new Image()
tileset5.src = '../assets/tileset5.png'

const tileset5reversed = new Image()
tileset5reversed.src = '../assets/tileset5_reversed.png'

export const SpriteCollection = {
  HERO: animate([
    new Sprite(tileset5, 16 * 8, 16 * 11, 16, 16),
    new Sprite(tileset5, 16 * 9, 16 * 11, 16, 16),
    new Sprite(tileset5, 16 * 10, 16 * 11, 16, 16),
    new Sprite(tileset5, 16 * 9, 16 * 11, 16, 16),
    new Sprite(tileset5, 16 * 8, 16 * 11, 16, 16),
  ]),
  HERO_REVERSE: animate([
    new Sprite(tileset5reversed, 16 * 23, 16 * 11, 16, 16),
    new Sprite(tileset5reversed, 16 * 22, 16 * 11, 16, 16),
    new Sprite(tileset5reversed, 16 * 21, 16 * 11, 16, 16),
    new Sprite(tileset5reversed, 16 * 22, 16 * 11, 16, 16),
    new Sprite(tileset5reversed, 16 * 23, 16 * 11, 16, 16),
  ]),
  HERO_STATIONARY: animate([
    new Sprite(tileset5, 16 * 8, 16 * 11, 16, 16),
    new Sprite(tileset5, 16 * 9, 16 * 11, 16, 16),
    new Sprite(tileset5, 16 * 8, 16 * 11, 16, 16),
  ], 500),
  HERO_STATIONARY_REVERSE: animate([
    new Sprite(tileset5reversed, 16 * 23, 16 * 11, 16, 16),
    new Sprite(tileset5reversed, 16 * 22, 16 * 11, 16, 16),
    new Sprite(tileset5reversed, 16 * 23, 16 * 11, 16, 16),
  ], 500),
  DEMON: animate([
    new Sprite(tileset5, 23*16, 17*16, 16, 16),
    new Sprite(tileset5, 24*16, 17*16, 16, 16),
    new Sprite(tileset5, 25*16, 17*16, 16, 16),
    new Sprite(tileset5, 26*16, 17*16, 16, 16),
  ], 150),
  SLIME: animate([
    new Sprite(tileset5, 27*16, 7*16, 16, 16),
    new Sprite(tileset5, 28*16, 7*16, 16, 16),
    new Sprite(tileset5, 29*16, 7*16, 16, 16),
    new Sprite(tileset5, 30*16, 7*16, 16, 16),
  ], 150),
  SLIME_REVERSE: animate([
    new Sprite(tileset5reversed, 4*16, 7*16, 16, 16),
    new Sprite(tileset5reversed, 3*16, 7*16, 16, 16),
    new Sprite(tileset5reversed, 2*16, 7*16, 16, 16),
    new Sprite(tileset5reversed, 1*16, 7*16, 16, 16),
  ], 150),
  ICY: animate([
    new Sprite(tileset5, 27*16, 9*16, 16, 16),
    new Sprite(tileset5, 28*16, 9*16, 16, 16),
    new Sprite(tileset5, 29*16, 9*16, 16, 16),
    new Sprite(tileset5, 30*16, 9*16, 16, 16),
  ], 150),
  ICY_REVERSE: animate([
    new Sprite(tileset5reversed, 4*16, 9*16, 16, 16),
    new Sprite(tileset5reversed, 3*16, 9*16, 16, 16),
    new Sprite(tileset5reversed, 2*16, 9*16, 16, 16),
    new Sprite(tileset5reversed, 1*16, 9*16, 16, 16),
  ], 150),
  SKELETON: animate([
    new Sprite(tileset5, 23*16, 5*16, 16, 16),
    new Sprite(tileset5, 24*16, 5*16, 16, 16),
    new Sprite(tileset5, 25*16, 5*16, 16, 16),
    new Sprite(tileset5, 26*16, 5*16, 16, 16),
  ], 150),
  SKELETON_REVERSE: animate([
    new Sprite(tileset5reversed, 8*16, 5*16, 16, 16),
    new Sprite(tileset5reversed, 7*16, 5*16, 16, 16),
    new Sprite(tileset5reversed, 6*16, 5*16, 16, 16),
    new Sprite(tileset5reversed, 5*16, 5*16, 16, 16),
  ], 150),
  ZOMBIE: animate([
    new Sprite(tileset5, 23*16, 13*16, 16, 16),
    new Sprite(tileset5, 24*16, 13*16, 16, 16),
    new Sprite(tileset5, 25*16, 13*16, 16, 16),
    new Sprite(tileset5, 26*16, 13*16, 16, 16),
  ], 150),
  ZOMBIE_REVERSE: animate([
    new Sprite(tileset5reversed, 8*16, 13*16, 16, 16),
    new Sprite(tileset5reversed, 7*16, 13*16, 16, 16),
    new Sprite(tileset5reversed, 6*16, 13*16, 16, 16),
    new Sprite(tileset5reversed, 5*16, 13*16, 16, 16),
  ], 150),
  DEMON: animate([
    new Sprite(tileset5, 23*16, 17*16, 16, 16),
    new Sprite(tileset5, 24*16, 17*16, 16, 16),
    new Sprite(tileset5, 25*16, 17*16, 16, 16),
    new Sprite(tileset5, 26*16, 17*16, 16, 16),
  ], 150),
  DEMON_REVERSE: animate([
    new Sprite(tileset5reversed, 8*16, 17*16, 16, 16),
    new Sprite(tileset5reversed, 7*16, 17*16, 16, 16),
    new Sprite(tileset5reversed, 6*16, 17*16, 16, 16),
    new Sprite(tileset5reversed, 5*16, 17*16, 16, 16),
  ], 150),
  ZOMBIE_SKULL: animate([
    new Sprite(tileset5, 23*16, 11*16, 16, 16),
    new Sprite(tileset5, 24*16, 11*16, 16, 16),
    new Sprite(tileset5, 25*16, 11*16, 16, 16),
    new Sprite(tileset5, 26*16, 11*16, 16, 16),
  ], 150),
  ZOMBIE_SKULL_REVERSE: animate([
    new Sprite(tileset5reversed, 8*16, 11*16, 16, 16),
    new Sprite(tileset5reversed, 7*16, 11*16, 16, 16),
    new Sprite(tileset5reversed, 6*16, 11*16, 16, 16),
    new Sprite(tileset5reversed, 5*16, 11*16, 16, 16),
  ], 150),
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
  ],
  TORCH: animate([
    new Sprite(tileset3, 8 * 16, 9 * 16 + 8, 16, 16),
    new Sprite(tileset3, 9 * 16, 9 * 16 + 8, 16, 16),
    new Sprite(tileset3, 10 * 16, 9 * 16 + 8, 16, 16),
    new Sprite(tileset3, 11 * 16, 9 * 16 + 8, 16, 16),
    new Sprite(tileset3, 12 * 16, 9 * 16 + 8, 16, 16),
    new Sprite(tileset3, 13 * 16, 9 * 16 + 8, 16, 16),
    new Sprite(tileset3, 14 * 16, 9 * 16 + 8, 16, 16),
    new Sprite(tileset3, 15 * 16, 9 * 16 + 8, 16, 16),
  ], 150),
  KEY_SILVER: new Sprite(tileset, 8 * 16, 8 * 16, 16, 16),
  KEY_GOLDEN: new Sprite(tileset, 9 * 16, 9 * 16, 16, 16),
  HEALTH_POTION: new Sprite(tileset5, 18*16, 14*16, 16, 16),
}