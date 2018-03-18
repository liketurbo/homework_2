import BaseModule from './base.module';
import displacementEffect from '../effects/displacement.effect';
import typeWritterEffect from '../effects/type-writter.effect';

class VideoModule extends BaseModule {
  constructor() {
    super();
    this.canvas = document.querySelector('.container__canvas');
    this.context = this.canvas.getContext('2d');
    this.effects = [displacementEffect, typeWritterEffect];
  }

  setUpEffects() {
    this.effects[0].setEffect(this.canvas);
    this.effects[0].setEffect(document.querySelector('.container__text'));
    this.effects[1].setEffect();

    setInterval(() => this.effects[0].runEffect(), this.getRandomInt(1500, 10000));
    setInterval(() => this.effects[1].runEffect(), this.getRandomInt(1500, 10000));
  }

  setUpSource(video) {
    this.video = video;
  }

  refreshCanvas() {
    this.canvas.style.opacity =
      this.canvas.style.opacity === '1'
        ? '0.999'
        : '1';
  }

  runLoop() {
    const { canvas, context, video } = this;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    context.globalCompositeOperation = 'multiply';
    context.fillStyle = 'red';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.globalCompositeOperation = 'source-over';

    this.refreshCanvas(canvas);
    requestAnimationFrame(this.runLoop.bind(this));
  }
}

export default new VideoModule();
