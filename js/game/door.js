import { Rectangle } from '../rectangle.js';
import { SpriteCollection } from '../sprite.js'
import { Sound, SoundCollection } from '../sound.js'
import { getRandomItem } from '../util.js'
import Config from '../config.js'
import Game from '../game.js'
import Key from './key.js';

export default class Door extends Rectangle {
  
  constructor(position, doorId) {
    super(Config.BLOCK_SIZE, Config.BLOCK_SIZE, position, SpriteCollection.DOOR_LEFT)

    this.doorId = doorId
    this.opened = false
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
      target.move()
    }
  }

  update() {
    if (!this.opened) {
      const opened = Game.player.inventory.has(Key, i => i.doorId === this.doorId)
      if (opened) this.open()
    }

    this.background = this.opened 
      ? [ this._doorFloor, SpriteCollection.DOOR_LEFT_OPEN ]
      : SpriteCollection.DOOR_LEFT
  }

}