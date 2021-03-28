import Floor from './game/floor.js'
import Wall from './game/wall.js'
import { Position, clonePosition } from './position.js'
import { SpriteCollection } from './sprite.js'
import Config from './config.js'

function generateEmptyGrid(width, height, blockSize) {
  const grid = []

  for (let h = 0; h < height; h++) {
    const row = []

    for (let w = 0; w < width; w++) {
      row.push(new Position(w * blockSize, h * blockSize))
    }

    grid.push(row)
  }

  return grid
}

export function generateEmptyLevel(cb) {
  const objects = []
  const grid = generateEmptyGrid(Config.TILES_WIDTH, Config.TILES_HEIGHT, Config.BLOCK_SIZE)
  
  grid.forEach((row, y) => {
    row.forEach((pos, x) => {
      let result = new Floor(pos)

      if (x === 0 || y === 0 || x === Config.TILES_WIDTH - 1 || y === Config.TILES_HEIGHT - 1) {
        let face

        if (x === 0 && y === Config.TILES_HEIGHT - 1) {
          face = SpriteCollection.WALL_BOTTOM_LEFT
        } else if (x === Config.TILES_WIDTH - 1 && y === Config.TILES_HEIGHT - 1) {
          face = SpriteCollection.WALL_BOTTOM_RIGHT
        } else if (y === Config.TILES_HEIGHT - 1) {
          face = SpriteCollection.WALL_BOTTOM
        } else if (x === 0) {
          face = SpriteCollection.WALL_LEFT
        } else if (x === Config.TILES_WIDTH - 1) {
          face = SpriteCollection.WALL_RIGHT
        } else {
          face = SpriteCollection.WALL_TOP
        }

        result = new Wall(pos, face)
      } else {
        objects.push(result)
      }

      if (cb) {
        const gobj = cb(x, y, pos)
        if (gobj) {
          result = gobj
        }
      }

      if (Array.isArray(result)) {
        result.forEach(r => objects.push(r))
      } else {
        objects.push(result)
      }
    })
  })

  return objects
}