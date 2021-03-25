export default class FpsCounter {

  constructor() {
    this.t1 = 0
    this.t2 = 0
    this.measuredFps = 0
    this.intervalId = setInterval(() => { 
      this.measuredFps = Math.round(1000 / this.t2) 
    }, 250)
  }

  timestamp() {
    this.t2 = +new Date() - this.t1;
    this.t1 = +new Date()
  }

  draw(ctx) {
    ctx.font = "24px monospace";
    ctx.fillStyle = 'yellow'
    ctx.fillText(`${this.measuredFps} fps`, 0 + 64, 0 + 32);
  }

}