class SoundManager {
  constructor() {
    this.sounds = []
  }

  register(sound) {
    this.sounds.push(sound)
  }
}

export default new SoundManager()