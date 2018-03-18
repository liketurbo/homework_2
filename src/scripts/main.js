import videoModule from './modules/video.module';
import audioModule from './modules/audio.module';

import '../styles/main.sass';

navigator.mediaDevices.getUserMedia({
  video: false,
  audio: true,
}).then((stream) => {
  audioModule.setUpSource(stream);
  audioModule.setUpInitialSettings();
  audioModule.runListenerLoop();
}).catch(err => console.log('error audio', err));

navigator.mediaDevices.getUserMedia({
  video: true,
  audio: false,
}).then((stream) => {
  const video = document.createElement('video');
  video.srcObject = stream;

  videoModule.setUpSource(video);
  videoModule.setUpSize();
  videoModule.setUpSizeListener();
  videoModule.setUpEffects();
  videoModule.runLoop();
}).catch(err => console.log('error video', err));
