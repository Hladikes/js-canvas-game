import GameInstance from './game.js'
import LevelBuilder from './levelBuilder.js'
import LivingEntity from './livingEntity.js'
import Floor from './game/floor.js'

export default class Level {

  constructor(player) {
    this.player = player
    const levelBuilder = new LevelBuilder()
    this.define(levelBuilder)
    this.rectangles = levelBuilder.build()
  }

  update() {
    this.rectangles.forEach(r => {
      this.player.checkCollision(r)
      GameInstance.projectiles.forEach(p => {
        if (!(r instanceof Floor)) {
          r.checkCollision(p)
        }
      })
      r.update()
    })
    this.player.update()
  }

  draw(ctx) {
    this.rectangles.forEach(r => r.draw(ctx))
    this.player.draw(ctx)
  }

  define(levelBuilder) {}

  addRectangle(r) {
    const index = this.rectangles.findIndex(rect => rect._rid === r._rid)
    if (index !== -1) return false
    this.rectangles.push(r)
    return true
  }

  removeRectangle(r) {
    const index = this.rectangles.findIndex(rect => rect._rid === r._rid)
    if (index === -1) return false
    this.rectangles.splice(index, 1)
    return true
  }

  addEntity(e) {
    const index = this.entities.findIndex(entity => entity._rid === e._rid)
    if (index !== -1) return false
    this.entities.push(e)
    return true
  }

  removeEntity(r) {
    const index = this.entities.findIndex(entity => entity._rid === e._rid)
    if (index === -1) return false
    this.entities.splice(index, 1)
    return true
  }

}