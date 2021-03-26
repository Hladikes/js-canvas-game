import { Rectangle } from './rectangle.js'
import Door from './game/door.js'
import Wall from './game/wall.js'
import Stones from './game/stones.js'
import Teleport from './game/teleport.js'

import { SpriteCollection } from './sprite.js'
import { generateEmptyLevel } from './levelGenerators.js'

import { getRandomItem } from './util.js'
import { convertTilesPosition, Position } from './position.js'

export function level1(game) {
  return generateEmptyLevel(game, (x, y, position) => {
    if (x !== 0 && x !== 9 && x !== game.TILES_WIDTH - 1 && y === 6) {
      return new Wall(game, position, SpriteCollection.WALL_TOP)
    }

    if (x > 3 && x < game.TILES_WIDTH - 4 && y === 3) {
      return new Wall(game, position, SpriteCollection.WALL_TOP)
    }

    if (x === 7 && y === game.TILES_HEIGHT - 1) {
      return [
        new Door(game, position),
        new Teleport(game, game.BLOCK_SIZE, 8, new Position(position.x, position.y + game.BLOCK_SIZE - 8), 1, convertTilesPosition(7, 1, game.BLOCK_SIZE))
      ]
    }

    if (x === 5 && (y === 4 || y === 5)) {
      return new Stones(game, position)
    }

    if ((x === 2 && y === 4) || (x === 11 && y === 7) || (y === 1 && x === game.TILES_WIDTH - 2)) {
      return new Rectangle(game.BLOCK_SIZE, game.BLOCK_SIZE, position, getRandomItem(SpriteCollection.SKULL))
    }
  })
}

export function level2(game) {
  return generateEmptyLevel(game, (x, y, position) => {

    if (x === 7 && y === 0) {
      return [
        new Door(game, position),
        new Teleport(game, game.BLOCK_SIZE, 8, position, 0, convertTilesPosition(7, game.TILES_HEIGHT - 2, game.BLOCK_SIZE))
      ]
    }

    if ((x === 6 && y === 2) || (x === 7 && y === 7) || (y === 5 && x === game.TILES_WIDTH - 2)) {
      return new Rectangle(game.BLOCK_SIZE, game.BLOCK_SIZE, position, getRandomItem(SpriteCollection.SKULL))
    }
  })
}