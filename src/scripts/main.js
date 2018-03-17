import { resizeElem, getRandomInt, refreshCanvas } from './functions';
import displacementEffect from './effects/displacement.effect';
import typeWritterEffect from './effects/type-writter.effect';

// import './side-element';
import './listeners';
import '../styles/main.sass';

resizeElem('.container__canvas', '.container');

const URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
const video = document.createElement('video');

navigator.mediaDevices.getUserMedia({
  video: true,
}).then((stream) => {
  video.src = URL.createObjectURL(stream);
}).catch(err => console.log('error', err));

const canvas = document.querySelector('.container__canvas');
const ctx = canvas.getContext('2d');

displacementEffect.setEffect(canvas);
displacementEffect.setEffect(document.querySelector('.container__text'));
typeWritterEffect.setEffect();

setInterval(() => displacementEffect.runEffect(), getRandomInt(1000, 10000));
setInterval(() => typeWritterEffect.runEffect(), getRandomInt(1000, 10000));

const loop = () => {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  ctx.globalCompositeOperation = 'multiply';
  ctx.fillStyle = 'red';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = 'source-over';

  refreshCanvas(canvas);
  requestAnimationFrame(loop);
};
loop();
