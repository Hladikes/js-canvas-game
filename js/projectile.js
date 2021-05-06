import Config from './config.js';
import GameInstance from './game.js';
import LivingEntity from './livingEntity.js';
import { clonePosition } from './position.js';
import { Rectangle } from './rectangle.js';
import Enemy from './enemy.js'
import { Sound, SoundCollection } from './sound.js';
export default class Projectile extends Rectangle {
  constructor(shooter, position, direction, background, damage, speed = 1)  {
    super(Config.BLOCK_SIZE / 6, Config.BLOCK_SIZE / 6, position, 'transparent')
    this.shooter = shooter
    this.position = clonePosition(position)
    this.direction = direction
    this.damage = damage
    this.speed = speed
    this.background = background

    this.hitSound = new Sound(SoundCollection.BASS_HIT, 0.5, false)
    
    setTimeout(() => {
      GameInstance.projectiles.delete(this)
    }, 5000)

    // this._debug = true
    // this._debugInfo = this.position
  }

  draw(ctx) {
    ctx.fillStyle = this.background;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, 7.5, 0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    super.update()
    this.position.x += this.speed * this.direction.dx
    this.position.y += this.speed * this.direction.dy
  }

  onCollide(collider) {
    if ((this.shooter instanceof Enemy) && (collider instanceof Enemy)) return
    if (collider.health <= 0) return
    if (collider === this.shooter) return
    if (collider instanceof LivingEntity) {
      this.hitSound.play()
      collider.damage(this.damage)
      GameInstance.projectiles.delete(this)
    }
  }
}