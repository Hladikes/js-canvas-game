import { Rectangle } from './rectangle.js'
import Door from './game/door.js'
import Wall from './game/wall.js'
import Stones from './game/stones.js'

import { SpriteCollection } from './sprite.js'
import { generateEmptyLevel } from './levelGenerators.js'

import { getRandomItem } from './util.js'

export function level1(game) {
  return generateEmptyLevel(game, (x, y, posX, posY) => {
    if (x !== 0 && x !== 7 && x !== game.TILES_WIDTH - 1 && y === 6) {
      return new Wall(game, posX, posY, SpriteCollection.WALL_TOP)
    }

    if (x > 3 && x < game.TILES_WIDTH - 4 && y === 3) {
      return new Wall(game, posX, posY, SpriteCollection.WALL_TOP)
    }

    if (x === 7 && y === 6) {
      let d = new Door(game, posX, posY)
      d.open()
      return d
    }

    if (x === 5 && (y === 4 || y === 5)) {
      return new Stones(game, posX, posY)
    }

    if ((x === 2 && y === 4) || (x === 11 && y === 7) || (y === 1 && x === game.TILES_WIDTH - 2)) {
      return new Rectangle(game.BLOCK_SIZE, game.BLOCK_SIZE, posX, posY, getRandomItem(SpriteCollection.SKULL))
    }
  })
}