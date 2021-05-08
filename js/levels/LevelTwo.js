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
import Zombie from '../game/zombie.js'
import Stones from '../game/stones.js'
import Void from '../void.js'

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

    lb.at(1, 1).lay(p => new Skeleton(p))
    lb.at(1, 2).lay(p => new Skeleton(p))
    lb.from(2, 3).to(w - 1, 3).set(p => new Wall(p, SpriteCollection.WALL_TOP))
    
    for (let i = 2; i <= 10; i += 2)
      lb.at(i, 4).set(p => new Stones(p))

    lb.at(9, 4).lay(p => new Key(p, 4))

    lb.at(w - 1, 5).lay(p => new Skeleton(p))
    lb.from(1, 6).to(w - 2, 6).set(p => new Wall(p, SpriteCollection.WALL_TOP))

    lb.at(2, h).set(p => new Door(p, 4))
    lb.at(2, h).lay(p => new Teleport(p, 2, convertTilesPosition(2, 1)))
    lb.at(2, h - 1).lay(p => new Zombie(p))
  }
}