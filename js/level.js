import LevelBuilder from './levelBuilder.js'

export default class Level {

  constructor(player) {
    this.player = player
    const levelBuilder = new LevelBuilder()
    this.define(levelBuilder)
    this.rectangles = levelBuilder.build()
  }

  update(dt) {
    this.rectangles.forEach(r => {
      r.update(dt)
      this.player.checkCollision(r)
    })
    this.player.update(dt)
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