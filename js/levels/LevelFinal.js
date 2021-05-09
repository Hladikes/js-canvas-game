import Level from '../level.js'
import Floor from '../game/floor.js'
import Config from '../config.js'
import Wall from '../game/wall.js'
import { SpriteCollection } from '../sprite.js'
import { convertTilesPosition } from '../position.js'
import Demon from '../game/demon.js'
import Stones from '../game/stones.js'
import { Rectangle } from '../rectangle.js'

export default class LevelOne extends Level {
  define(lb) {
    const w = Config.TILES_WIDTH - 1
    const h = Config.TILES_HEIGHT - 1

    lb.from(0, 0).to(w, h).set(p => new Floor(p))
    lb.from(1, 0).to(w - 1, 0).set(p => new Wall(p, SpriteCollection.WALL_TOP))
    lb.from(1, h).to(w - 1, h).set(p => new Wall(p, SpriteCollection.WALL_BOTTOM))
    lb.from(0, 0).to(0, h - 1).set(p => new Wall(p, SpriteCollection.WALL_LEFT))
    lb.from(w, 0).to(w, h - 1).set(p => new Wall(p, SpriteCollection.WALL_RIGHT))
    lb.at(w, h).set(p => new Wall(p, SpriteCollection.WALL_BOTTOM_RIGHT))
    lb.at(0, h).set(p => new Wall(p, SpriteCollection.WALL_BOTTOM_LEFT))

    lb.at(2, h - 2).lay(p => new Demon(p))
    lb.at(w - 3, 3).set(p => new Stones(p))
    lb.at(1, 1).lay(p => new Rectangle(Config.BLOCK_SIZE, Config.BLOCK_SIZE, p, SpriteCollection.TORCH))
    lb.at(1, h - 1).lay(p => new Rectangle(Config.BLOCK_SIZE, Config.BLOCK_SIZE, p, SpriteCollection.TORCH))
    lb.at(w - 1, h - 1).lay(p => new Rectangle(Config.BLOCK_SIZE, Config.BLOCK_SIZE, p, SpriteCollection.TORCH))
    lb.at(w - 1, 1).lay(p => new Rectangle(Config.BLOCK_SIZE, Config.BLOCK_SIZE, p, SpriteCollection.TORCH))
  }
}