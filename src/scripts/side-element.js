import THREELib from 'three-js';
import { resizeRend } from './functions';

const Three = THREELib();

const scene = new Three.Scene();
export const camera = new Three.PerspectiveCamera(75, null, 0.1, 1000);
export const renderer = new Three.WebGLRenderer({ alpha: true });
resizeRend(renderer, camera, '.container');
document.querySelector('.container').appendChild(renderer.domElement);

// const geometry = new Three.BoxBufferGeometry(1, 1, 1);
// const material = new Three.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
// const cube = new Three.Mesh(geometry, material);
// cube.position.z = -5;
// cube.position.x = -4;
// cube.position.y = 2;

const material = new Three.LineBasicMaterial({ color: 0x0000ff });

const geometry = new Three.Geometry();
geometry.vertices.push(
  new Three.Vector3(-10, 0, 0),
  new Three.Vector3(0, 10, 0),
  new Three.Vector3(10, 0, 0),
);
camera.position.z = 0;
const line = new Three.Line(geometry, material);

const update = () => {

};
const render = () => {
  renderer.render(scene, camera);
};
const game = () => {
  requestAnimationFrame(game);

  update();
  render();
};
scene.add(line);
game();
