import { resizeElem } from './functions';

window.addEventListener('resize', () => {
  resizeElem('#canvas', '.container');
});
