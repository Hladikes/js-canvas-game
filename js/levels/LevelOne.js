import Level from '../level.js'
import Floor from '../game/floor.js'
import Config from '../config.js'
import Wall from '../game/wall.js'
import Key from '../game/key.js'
import HealthPotion from '../game/healthPotion.js'
import Door from '../game/door.js'
import Teleport from '../game/teleport.js'
import { SpriteCollection } from '../sprite.js'
import { convertTilesPosition } from '../position.js'
import Slime from '../game/slime.js'
import Skeleton from '../game/skeleton.js'
import Stones from '../game/stones.js'

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

    lb.at(w - 1, 1).lay(p => new Stones(p))
    lb.at(w - 2, 1).lay(p => new Stones(p))
    lb.at(w - 1, 2).lay(p => new Key(p, 1))
    lb.at(w - 3, 2).lay(p => new Slime(p))
    lb.from(1, 5).to(w - 1, 5).set(p => new Wall(p, SpriteCollection.WALL_TOP))
    lb.at(4, 5).set(p => new Door(p, 1))

    lb.at(6, 4).lay(p => new Skeleton(p))
    lb.at(w - 2, h - 1).lay(p => new Skeleton(p))

    lb.from(3, 2).to(3, 4).lay(p => new Stones(p))
    lb.at(5, 1).lay(p => new Stones(p))
    lb.at(7, 1).lay(p => new Stones(p))
    lb.at(7, 2).lay(p => new Stones(p))
    lb.at(8, 1).lay(p => new Stones(p))
    lb.from(6, 1).to(6, 3).lay(p => new Stones(p))
    lb.at(w - 2, 4).lay(p => new Stones(p))
    lb.at(w - 1, 4).lay(p => new Stones(p))
    lb.at(w - 1, 3).lay(p => new Stones(p))
    
    lb.at(1, h - 1).lay(p => new Key(p, 2))
    lb.at(w - 2, h).set(p => new Door(p, 2))
    lb.at(w - 2, h).lay(p => new Teleport(p, 1, convertTilesPosition(w - 2, 1)))
  }
}