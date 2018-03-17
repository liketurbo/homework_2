export const getRandomInt = (min, max) => (
  /*
  * getRandomInt(0, 9)
  * 0 - inclusive
  * 9 - inclusive
  */
  Math.floor(Math.random() * ((max - min) + 1)) + min
);

export const resizeElem = (elemId, parentId) => {
  const elem = document.querySelector(elemId);
  const parent = document.querySelector(parentId);
  elem.width = parent.offsetWidth;
  elem.height = parent.offsetHeight;
};

export const refreshCanvas = (canvas) => {
  canvas.style.opacity = canvas.style.opacity === '1' ? '0.999' : '1';
};

// export const resizeRend = (renderer, camera, parentId) => {
//   const parent = document.querySelector(parentId);
//
//   renderer.setSize(parent.offsetWidth, parent.offsetHeight);
//   camera.aspect = (parent.offsetWidth / parent.offsetHeight);
//   camera.updateProjectionMatrix();
// };
