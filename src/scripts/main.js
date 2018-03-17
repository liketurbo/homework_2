import {
  addDisplacement,
  runDisplacement,
  resizeElem,
  getRandomInt,
  refreshCanvas,
} from './functions';

// import './side-element';
import './listeners';
import '../styles/main.sass';

resizeElem('#canvas', '.container');

const URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
const video = document.createElement('video');
navigator.mediaDevices.getUserMedia({
  video: true,
}).then((stream) => {
  video.src = URL.createObjectURL(stream);
}).catch(err => console.log('error', err));

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

addDisplacement(canvas);
setInterval(() => runDisplacement(), getRandomInt(1000, 10000));

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
