import THREELib from 'three-js';

const Three = THREELib();

class VolumeMeterWebGL {
  constructor() {
    this.parent = document.querySelector('.container__audio');
    this.coefficient = 0;
  }

  setUpParentSize() {
    const container = document.querySelector('.container');
    this.parent.style.width = `${container.offsetWidth / 2}px`;
    this.parent.style.height = `${container.offsetHeight / 2}px`;
    this.parent.style.left = `${container.offsetWidth / 2}px`;
    this.parent.style.top = `${container.offsetHeight / 2}px`;
  }

  setUpWebGLSize() {
    this.camera.aspect = this.parent.offsetWidth / this.parent.offsetHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.parent.offsetWidth, this.parent.offsetHeight);
  }

  setUpWebGL() {
    this.scene = new Three.Scene();
    this.camera = new Three.PerspectiveCamera(
      75,
      this.parent.offsetWidth / this.parent.offsetHeight,
      0.1,
      1000,
    );
    this.renderer = new Three.WebGLRenderer({ alpha: true });

    this.renderer.setSize(this.parent.offsetWidth, this.parent.offsetHeight);
    this.parent.appendChild(this.renderer.domElement);

    this.camera.position.z = 2;
  }

  setUpListener() {
    window.addEventListener('resize', () => {
      this.setUpParentSize();
      this.setUpWebGLSize();
    });
  }

  addCube() {
    const geometry = new Three.BoxGeometry(1, 1, 1);
    const material = new Three.MeshBasicMaterial({ color: 0xffffff, wireframe: false });
    this.cube = new Three.Mesh(geometry, material);
    this.scene.add(this.cube);
  }

  runLoop() {
    this.cube.geometry.vertices[0].y = this.coefficient;
    this.cube.geometry.vertices[5].y = this.coefficient;

    this.cube.geometry.vertices[1].y = this.coefficient;
    this.cube.geometry.vertices[4].y = this.coefficient;

    this.cube.geometry.verticesNeedUpdate = true;

    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.runLoop.bind(this));
  }
}

export default new VolumeMeterWebGL();
