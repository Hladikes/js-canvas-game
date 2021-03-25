import { Rectangle } from './rectangle.js'
import Door from './game/door.js'
import Wall from './game/wall.js'
import Stones from './game/stones.js'
import Teleport from './game/teleport.js'

import { SpriteCollection } from './sprite.js'
import { generateEmptyLevel } from './levelGenerators.js'

import { getRandomItem } from './util.js'

export function level1(game) {
  return generateEmptyLevel(game, (x, y, posX, posY) => {
    if (x !== 0 && x !== 9 && x !== game.TILES_WIDTH - 1 && y === 6) {
      return new Wall(game, posX, posY, SpriteCollection.WALL_TOP)
    }

    if (x > 3 && x < game.TILES_WIDTH - 4 && y === 3) {
      return new Wall(game, posX, posY, SpriteCollection.WALL_TOP)
    }

    if (x === 7 && y === game.TILES_HEIGHT - 1) {
      return [
        new Door(game, posX, posY),
        new Teleport(game, game.BLOCK_SIZE, 8, posX, posY + game.BLOCK_SIZE - 8, 1, posX, 16)
      ]
    }

    if (x === 5 && (y === 4 || y === 5)) {
      return new Stones(game, posX, posY)
    }

    if ((x === 2 && y === 4) || (x === 11 && y === 7) || (y === 1 && x === game.TILES_WIDTH - 2)) {
      return new Rectangle(game.BLOCK_SIZE, game.BLOCK_SIZE, posX, posY, getRandomItem(SpriteCollection.SKULL))
    }
  })
}

export function level2(game) {
  return generateEmptyLevel(game, (x, y, posX, posY) => {

    if (x === 7 && y === 0) {
      return [
        new Door(game, posX, posY),
        new Teleport(game, game.BLOCK_SIZE, 8, posX, posY, 0, posX, (game.TILES_HEIGHT - 1) * game.BLOCK_SIZE - 32)
      ]
    }

    if ((x === 6 && y === 2) || (x === 7 && y === 7) || (y === 5 && x === game.TILES_WIDTH - 2)) {
      return new Rectangle(game.BLOCK_SIZE, game.BLOCK_SIZE, posX, posY, getRandomItem(SpriteCollection.SKULL))
    }
  })
}