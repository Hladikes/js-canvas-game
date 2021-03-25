export class Sound {
  
  constructor(src, volume = 1, loop = false) {
    this.sound = document.createElement('audio');
    this.sound.src = src;
    this.sound.setAttribute('preload', 'auto');
    this.sound.setAttribute('controls', 'none');

    if (loop) this.sound.setAttribute('loop', 'none');
    
    this.sound.style.display = 'none';
    this.sound.volume = volume
    document.body.appendChild(this.sound);
  }

  play() {
    this.sound.play()
  }

  stop() {
    this.sound.pause()
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
  FOOTSTEP_2: '../sounds/sfx/footstep_2.mp3'
}