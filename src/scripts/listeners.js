import { resizeElem } from './functions';
// import { renderer, camera } from './side-element';

window.addEventListener('resize', () => {
  resizeElem('.container__canvas', '.container');
  // resizeRend(renderer, camera, '.container');
});
