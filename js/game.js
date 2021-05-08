import Player from './game/player.js'
import { convertTilesPosition } from './position.js'
import Gravity from './enums/gravity.js'
import LevelOne from './levels/LevelOne.js'
import LevelTwo from './levels/LevelTwo.js'
import LevelThree from './levels/LevelThree.js'
import LevelFinal from './levels/LevelFinal.js'
import LivingEntity from './livingEntity.js'
import MenuController from './menuController.js'
class Game {

  constructor() {
    this.player = new Player(convertTilesPosition(1, 1))
    this.player.setHorizontalGravity(Gravity.CENTER)
    this.player.setVerticalGravity(Gravity.CENTER)
    this.player.canShootProjectiles = true
    
    this.paused = false
    this.projectiles = new Set()
    this.levelIndex = 0
    this.levels = [
      new LevelOne(this.player),
      new LevelTwo(this.player),
      new LevelThree(this.player),
      new LevelFinal(this.player),
    ]
    this.getCurrentLevel().rectangles.forEach(r => {
      if (r instanceof LivingEntity) r.canShootProjectiles = true
    })
  }

  pause() { this.paused = true }

  resume() { this.paused = false }

  setLevel(index) {
    if (index >= 0 && index < this.levels.length) {
      this.getCurrentLevel().rectangles.forEach(r => {
        if (r instanceof LivingEntity) r.canShootProjectiles = false
      })
      this.levelIndex = index
      this.getCurrentLevel().rectangles.forEach(r => {
        if (r instanceof LivingEntity) r.canShootProjectiles = true
      })
      this.projectiles.clear()
    }
  }

  getCurrentLevel() {
    return this.levels[this.levelIndex]
  }

  update() {
    if (this.player.health <= 0) {
      MenuController.showView('rip')
      return
    }
    if (this.paused) return
    this.projectiles.forEach(projectile => {
      projectile.update()
      this.player.checkCollision(projectile)
    })
    this.getCurrentLevel().update()
  }

  draw(ctx) {
    if (this.paused) return
    this.getCurrentLevel().draw(ctx)
    this.projectiles.forEach(projectile => projectile.draw(ctx))
  }

}

const GameInstance = new Game()
export default GameInstance