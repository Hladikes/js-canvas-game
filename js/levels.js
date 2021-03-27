import Config from './config.js'
import { Rectangle } from './rectangle.js'
import Door from './game/door.js'
import Wall from './game/wall.js'
import Stones from './game/stones.js'
import Teleport from './game/teleport.js'
import Key from './game/key.js'

import { SpriteCollection } from './sprite.js'
import { generateEmptyLevel } from './levelGenerators.js'

import { getRandomItem, getRandomBool } from './util.js'
import { convertTilesPosition, Position } from './position.js'

export function level1() {
  return generateEmptyLevel((x, y, position) => {
    if (x !== 0 && x !== 9 && x !== Config.TILES_WIDTH - 1 && y === 6) {
      return new Wall(position, SpriteCollection.WALL_TOP)
    }

    if (x > 3 && x < Config.TILES_WIDTH - 4 && y === 3) {
      return new Wall(position, SpriteCollection.WALL_TOP)
    }

    if (x === 7 && y === Config.TILES_HEIGHT - 1) {
      return [
        new Door(position, 1),
        new Teleport(
          Config.BLOCK_SIZE, 
          8, 
          new Position(position.x, position.y + Config.BLOCK_SIZE - 8), 
          1,
          convertTilesPosition(7, 1, Config.BLOCK_SIZE))
      ]
    }

    if (x === 2 && y === 0) {
      return [
        new Door(position, 10),
        new Teleport(
          Config.BLOCK_SIZE, 
          8, 
          position, 
          1,
          convertTilesPosition(2, Config.TILES_HEIGHT - 2, Config.BLOCK_SIZE))
      ]
    }

    if (x === Config.TILES_WIDTH - 2 && y === Config.TILES_HEIGHT - 2) {
      return new Key(position, 1, false)
    }

    if (x === 5 && (y === 4 || y === 5)) {
      return new Stones(position)
    }

    if ((x === 2 && y === 4) || (x === 11 && y === 7) || (y === 1 && x === Config.TILES_WIDTH - 2)) {
      return new Rectangle(Config.BLOCK_SIZE, Config.BLOCK_SIZE, position, getRandomItem(SpriteCollection.SKULL))
    }
  })
}

export function level2(game) {
  return generateEmptyLevel((x, y, position) => {

    if (x === 7 && y === 0) {
      return [
        new Door(position, 1),
        new Teleport(Config.BLOCK_SIZE, 8, position, 0, convertTilesPosition(7, Config.TILES_HEIGHT - 2, Config.BLOCK_SIZE))
      ]
    }

    if ((y === 7 || y === 6 || y === 8) && x > 0 && x < Config.TILES_WIDTH - 1 && x !== 6 && x !== 7) {
      return (getRandomBool() && getRandomBool())
        ? new Wall(position, SpriteCollection.WALL_TOP)
        : new Stones(position)
    }

    if (x === Config.TILES_WIDTH - 4 && y === Config.TILES_HEIGHT - 2) {
      return new Key(position, 10, true)
    }

    if (x === 2 && y === Config.TILES_HEIGHT - 1) {
      return [
        new Door(position, 10),
        new Teleport(
          Config.BLOCK_SIZE, 
          8, 
          new Position(position.x, position.y + Config.BLOCK_SIZE - 8), 
          0, 
          convertTilesPosition(2, 1, Config.BLOCK_SIZE))
      ]
    }

    if ((x === 6 && y === 2) || (x === 7 && y === 8) || (y === 5 && x === Config.TILES_WIDTH - 2)) {
      return new Rectangle(Config.BLOCK_SIZE, Config.BLOCK_SIZE, position, getRandomItem(SpriteCollection.SKULL))
    }
  })
}