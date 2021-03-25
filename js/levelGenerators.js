import Floor from './game/floor.js'
import Wall from './game/wall.js'
import { SpriteCollection } from './sprite.js'

function generateEmptyGrid(width, height, blockSize) {
  const grid = []

  for (let h = 0; h < height; h++) {
    const row = []

    for (let w = 0; w < width; w++) {
      row.push({
        posX: w * blockSize,
        posY: h * blockSize,
      })
    }

    grid.push(row)
  }

  return grid
}

export function generateEmptyLevel(game, cb) {
  const objects = []
  const grid = generateEmptyGrid(game.TILES_WIDTH, game.TILES_HEIGHT, game.BLOCK_SIZE)

  grid.forEach((row, y) => {
    row.forEach((obj, x) => {
      let result = new Floor(game, obj.posX, obj.posY)

      if (x === 0 || y === 0 || x === game.TILES_WIDTH - 1 || y === game.TILES_HEIGHT - 1) {
        let face

        if (x === 0 && y === game.TILES_HEIGHT - 1) {
          face = SpriteCollection.WALL_BOTTOM_LEFT
        } else if (x === game.TILES_WIDTH - 1 && y === game.TILES_HEIGHT - 1) {
          face = SpriteCollection.WALL_BOTTOM_RIGHT
        } else if (y === game.TILES_HEIGHT - 1) {
          face = SpriteCollection.WALL_BOTTOM
        } else if (x === 0) {
          face = SpriteCollection.WALL_LEFT
        } else if (x === game.TILES_WIDTH - 1) {
          face = SpriteCollection.WALL_RIGHT
        } else {
          face = SpriteCollection.WALL_TOP
        }

        result = new Wall(game, obj.posX, obj.posY, face)
      } else {
        objects.push(result)
      }

      if (cb) {
        const gobj = cb(x, y, obj.posX, obj.posY)
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