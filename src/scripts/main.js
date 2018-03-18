import { resizeElem } from './functions';
import videoModule from './modules/video.module';
// import displacementEffect from './effects/displacement.effect';
// import typeWritterEffect from './effects/type-writter.effect';

// import './side-element';
import './listeners';
import './modules/audio.module';
import '../styles/main.sass';

resizeElem('.container__canvas', '.container');

const video = document.createElement('video');

navigator.mediaDevices.getUserMedia({
  video: true,
  audio: false,
}).then((stream) => {
  video.srcObject = stream;
}).catch(err => console.log('error', err));

videoModule.setUpSource(video);
videoModule.setUpEffects();
videoModule.runLoop();
