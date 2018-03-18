const audio = document.createElement('video');

navigator.mediaDevices.getUserMedia({
  video: false,
  audio: true,
}).then((stream) => {
  audio.srcObject = stream;
}).catch(err => console.log('error', err));
