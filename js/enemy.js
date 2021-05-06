import LivingEntity from './livingEntity.js';
import Config from './config.js'
import Player from './game/player.js';
import GameInstance from './game.js';
import Projectile from './projectile.js';

export default class Enemy extends LivingEntity {
  constructor(position, background, health, projectileInterval = 1000, projectileDamage, projectileColor = 'white') {
    super(Config.BLOCK_SIZE, Config.BLOCK_SIZE, position, background, health)

    this.projectileColor = projectileColor
    this.projectileDamage = projectileDamage

    this.shootInterval = setInterval(() => {
      this.shootPlayer()
    }, projectileInterval)
  }

  damage(n) {
    super.damage(n)
    
    if (this.health === 0) {
      clearInterval(this.shootInterval)
    }
  }

  shootPlayer() {
    if (!GameInstance) return
    if (GameInstance.player.health === 0) return
    let vector = { dx: 0, dy: 0 }

    const distance = Math.sqrt(
      Math.abs((GameInstance.player.position.x - this.position.x))**2 + 
      Math.abs((GameInstance.player.position.y - this.position.y))**2
    )

    const speed = 7

    vector.dx = (GameInstance.player.position.x - this.position.x) / (distance / speed)
    vector.dy = (GameInstance.player.position.y - this.position.y) / (distance / speed)

    this.shootProjectile(new Projectile(
      this, this.position, vector, this.projectileColor, this.projectileDamage, 1
    ))
  }

  onCollide(collider) {
    if (this.health === 0) return
    
    if (collider instanceof Player) {
      collider.damage(10)
      collider.flipDirection()
      collider.move(Config.BLOCK_SIZE / 2)
    }
  }
}