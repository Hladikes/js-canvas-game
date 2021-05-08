import Level from '../level.js'
import Floor from '../game/floor.js'
import Config from '../config.js'
import Wall from '../game/wall.js'
import Key from '../game/key.js'
import Door from '../game/door.js'
import Teleport from '../game/teleport.js'
import { SpriteCollection } from '../sprite.js'
import { convertTilesPosition } from '../position.js'
import Slime from '../game/slime.js'
import Skeleton from '../game/skeleton.js'
import Icy from '../game/icy.js'
import Stones from '../game/stones.js'
import { Rectangle } from '../rectangle.js'
import Zombie from '../game/zombie.js'
import ZombieSkull from '../game/zombieSkull.js'
import HealthPotion from '../game/healthPotion.js'

export default class LevelThree extends Level {
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

    lb.at(2, 0).set(p => new Door(p, 4))
    lb.at(2, 0).lay(p => new Teleport(p, 1, convertTilesPosition(2, h - 1)))
    
    lb.at(1, 2).lay(p => new HealthPotion(p))

    lb.from(2, 2).to(w - 2, 2).lay(p => Math.random() > 0.25 ? new Stones(p) : new Wall(p, SpriteCollection.SKULL[0]))
    lb.from(w - 2, 3).to(w - 2, h - 1).lay(p => Math.random() > 0.25 ? new Stones(p) : new Wall(p, SpriteCollection.SKULL[0]))
    lb.at(w - 1, 2).set(p => new Door(p, 7))
    lb.at(w - 1, 5).lay(p => new HealthPotion(p))
    lb.at(w - 1, h).set(p => {
      const d = new Door(p, 10)
      d.opened = true
      return d
    })
    lb.at(w - 1, h).lay(p => new Teleport(p, 3, convertTilesPosition(w - 1, 1)))

    lb.from(1, 4).to(w - 4, 4).set(p => new Wall(p, SpriteCollection.WALL_TOP))
    lb.from(2, 7).to(w - 3, 7).set(p => new Wall(p, SpriteCollection.WALL_TOP))

    lb.at(w - 3, 3).lay(p => new Skeleton(p))

    lb.at(w - 5, 5).lay(p => new ZombieSkull(p))
    lb.at(2, 6).lay(p => new ZombieSkull(p))
    lb.at(7, 6).lay(p => new ZombieSkull(p))
    lb.at(7, 5).lay(p => new Key(p, 8))
    
    lb.at(1, h - 2).set(p => new Door(p, 8))
    lb.at(2, h - 1).lay(p => new Icy(p))
    lb.at(w - 4, h - 2).set(p => new Door(p, 8))
    lb.at(w - 5, h - 1).lay(p => new Zombie(p))
    lb.at(6, h - 1).lay(p => new Key(p, 7, true))

    // lb.at(1, h - 1).lay(p => new Key(p, 5))
    // lb.at(w - 2, h).set(p => new Door(p, 5))
    // lb.at(w - 2, h).lay(p => new Teleport(p, 1, convertTilesPosition(w - 2, 1)))
  }
}