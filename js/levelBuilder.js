import Config from './config.js'
import { convertTilesPosition } from './position.js'
import Void from './void.js'

export default class LevelBuilder {
  constructor() {
    this.grid = []
    for (let h = 0; h < Config.TILES_HEIGHT; h++) {
      const row = []
      for (let w = 0; w < Config.TILES_WIDTH; w++) {
        row.push(
          new Void(Config.BLOCK_SIZE, Config.BLOCK_SIZE, convertTilesPosition(w, h))
        )
      }
      this.grid.push(row)
    }
    // console.log('grid', this.grid)
  }

  build() {
    let arr = []
    for (let y = 0; y < this.grid.length; y++) {
      for (let x = 0; x < this.grid[y].length; x++) {
        if (Array.isArray(this.grid[y][x])) {
          for (let n = 0; n < this.grid[y][x].length; n++) {
            arr.push(this.grid[y][x][n])
          }
        } else {
          arr.push(this.grid[y][x])
        }
      }
    }

    return arr
  }

  at(x, y) {
    const self = this

    return {
      set(cb) {
        self.grid[y][x] = cb(convertTilesPosition(x, y))
        // console.log(self.grid[y][x])
      },
      
      lay(cb) {
        if (self.grid[y][x].constructor === Void) {
          self.grid[y][x] = []
        } 
        
        if (!Array.isArray(self.grid[y][x])) {
          self.grid[y][x] = [ self.grid[y][x] ]
        }
        
        self.grid[y][x].push(cb(convertTilesPosition(x, y)))
      }
    }
  }

  from(fx = 0, fy = 0) {
    const self = this
    return {
      to(tx = 0, ty = 0) {
        tx = tx >= Config.TILES_WIDTH ? Config.TILES_WIDTH - 1 : tx
        ty = ty >= Config.TILES_HEIGHT ? Config.TILES_HEIGHT - 1: ty

        
        // tx += (tx == fx)
        // ty += (ty == fy)

        return {
          set(cb) {
            if (!cb) throw new Error('No callback method provided.')

            for (let x = fx; x <= tx; x++) {
              for (let y = fy; y <= ty; y++) {
                self.at(x, y).set(cb)
              }
            }
          },

          lay(cb) {
            if (!cb) throw new Error('No callback method provided.')

            for (let x = fx; x <= tx; x++) {
              for (let y = fy; y <= ty; y++) {
                self.at(x, y).lay(cb)
              }
            }
          }
        }
      }
    }
  }
}