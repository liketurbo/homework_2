import { addEffect, runEffect, resizeElem } from './functions';

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
// addEffect(canvas, 'displacement');
// setInterval(() => runEffect(), 1000);

const loop = () => {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  requestAnimationFrame(loop);
};
loop();
