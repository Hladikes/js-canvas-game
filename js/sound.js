import SoundManager from './soundManager.js'

export class Sound {
  
  constructor(src, volume = 1, loop = false) {
    SoundManager.register(this)
    
    this.sound = document.createElement('audio');
    this.sound.src = src;
    this.sound.setAttribute('preload', 'auto');
    this.sound.setAttribute('controls', 'none');

    if (loop) this.sound.setAttribute('loop', 'none');
    
    this.sound.style.display = 'none';
    this.sound.volume = volume
    document.body.appendChild(this.sound);

    this.defaultVolume = volume
    this.isPlaying = false
  }

  play() {
    this.sound.play()
    this.isPlaying = true
  }

  stop() {
    this.sound.pause()
    this.isPlaying = false
  }

  mute() {
    this.sound.volume = 0
  }

  unmute() {
    this.sound.volume = this.defaultVolume
  }

  setVolume(vol) {
    this.sound.volume = vol
  }

}

export const SoundCollection = {
  MUSIC: '../sounds/music/C418 - Floating Trees.mp3',
  WIND: '../sounds/sfx/wind.mp3',
  DOOR_OPEN: '../sounds/sfx/door_lock_unlock.mp3',
  DOOR_CLOSE: '../sounds/sfx/door_close.mp3',
  FOOTSTEP_1: '../sounds/sfx/footstep_1.mp3',
  FOOTSTEP_2: '../sounds/sfx/footstep_2.mp3',
  BASS_HIT: '../sounds/sfx/enemy_hit_bass_2.mp3',
}