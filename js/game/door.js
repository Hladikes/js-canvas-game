import { Rectangle } from '../rectangle.js';
import { SpriteCollection } from '../sprite.js'
import { Sound, SoundCollection } from '../sound.js'
import { getRandomItem } from '../util.js'

export default class Floor extends Rectangle {
  
  constructor(game, posX, posY) {
    super(game.BLOCK_SIZE, game.BLOCK_SIZE, posX, posY, SpriteCollection.DOOR_LEFT)

    this.opened = true
    this._doorFloor = getRandomItem(SpriteCollection.FLOOR)
    this.soundOpen = new Sound(SoundCollection.DOOR_OPEN, 0.2)
    this.soundClose = new Sound(SoundCollection.DOOR_CLOSE, 0.2)
  }

  open() {
    if (!this.opened) {
      this.opened = true
      this.soundOpen.play()
    }
  }

  close() {
    if (this.opened) {
      this.opened = false
      this.soundClose.play()
    }
  }
  
  onCollide(target) {
    if (!this.opened) {
      target.flipDirection()
      target.move(target.speed)
    }
  }

  update() {
    this.background = this.opened 
      ? [ this._doorFloor, SpriteCollection.DOOR_LEFT_OPEN ]
      : SpriteCollection.DOOR_LEFT
  }

}