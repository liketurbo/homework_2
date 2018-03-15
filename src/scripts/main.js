import { resizeElem } from './functions';

import './listeners';
import '../styles/main.sass';

resizeElem('#canvas', '.container');

const URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
const video = document.createElement('video');

navigator.mediaDevices.getUserMedia({
  audio: true,
  video: true,
}).then((stream) => {
  video.src = URL.createObjectURL(stream);
});

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const loop = () => {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  ctx.globalAlpha = 0.3;

  ctx.fillStyle = 'red';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(loop);
};
loop();
