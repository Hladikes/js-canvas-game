import { Rectangle } from './rectangle.js'
import Config from './config.js'
import { Position } from './position.js'

export default class Void extends Rectangle {

  constructor(width = Config.BLOCK_SIZE, height = Config.BLOCK_SIZE, position = new Position(0, 0)) {
    super(width, height, position, '#25131A')
  }

}