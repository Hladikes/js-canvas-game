import Level from '../level.js'
import Floor from '../game/floor.js'
import Config from '../config.js'
import Wall from '../game/wall.js'
import Key from '../game/key.js'
import Door from '../game/door.js'
import Teleport from '../game/teleport.js'
import { Sprite, SpriteCollection } from '../sprite.js'
import { convertTilesPosition } from '../position.js'
import { Rectangle } from '../rectangle.js'
import { getRandomItem } from '../util.js'
import LivingEntity from '../livingEntity.js'
import Skeleton from '../game/skeleton.js'

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

    lb.at(w - 2, 0).set(p => new Door(p, 1))
    lb.at(w - 2, 0).lay(p => new Teleport(p, 0, convertTilesPosition(w - 2, h - 1)))

    lb.at(1, 3).lay(p => new Skeleton(p))
    lb.from(2, 3).to(w - 1, 3).set(p => new Wall(p, SpriteCollection.WALL_TOP))
    lb.at(w - 1, 6).lay(p => new Skeleton(p))
    lb.from(1, 6).to(w - 2, 6).set(p => new Wall(p, SpriteCollection.WALL_TOP))

    // lb.at(3, 4).lay(p => new Rectangle(Config.BLOCK_SIZE, Config.BLOCK_SIZE, p, getRandomItem(SpriteCollection.SKULL)))
    // lb.at(4, h - 2).lay(p => new Rectangle(Config.BLOCK_SIZE, Config.BLOCK_SIZE, p, getRandomItem(SpriteCollection.SKULL)))
    // lb.at(w - 2, h - 3).lay(p => new Rectangle(Config.BLOCK_SIZE, Config.BLOCK_SIZE, p, getRandomItem(SpriteCollection.SKULL)))
    
  }
}