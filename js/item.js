import Game from "./game.js";
import Player from "./game/player.js";
import { Rectangle } from "./rectangle.js";

export default class Item extends Rectangle {

  constructor(width, height, position, background) {
    super(width, height, position, background)
  }

  onCollide(collidor) {
    if (collidor.constructor !== Player) return
    if (!collidor.inventory.add(this)) return
    Game.remove(this)
  }

}