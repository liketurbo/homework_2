import volumeMeterWebGL from '../webgl/volume-meter.webgl';

class AudioModule {
  setUpSource(audio) {
    this.stream = audio;
  }

  setUpInitialSettings() {
    const context = new AudioContext();
    const source = context.createMediaStreamSource(this.stream);
    this.processor = context.createScriptProcessor(512);
    source.connect(this.processor);
    this.processor.connect(context.destination);

    volumeMeterWebGL.setUpParentSize();
    volumeMeterWebGL.setUpWebGL();
    volumeMeterWebGL.setUpListener();
    volumeMeterWebGL.addCube();
    volumeMeterWebGL.runLoop();
  }

  runListenerLoop() {
    this.processor.onaudioprocess = (e) => {
      const buffer = e.inputBuffer.getChannelData(0);

      let sum = 0;
      for (const i of buffer) {
        sum += (i * i);
      }

      this.runRenderLoop(sum);
    };
  }

  runRenderLoop(sum) {
    volumeMeterWebGL.coefficient = sum;
  }
}

export default new AudioModule();
