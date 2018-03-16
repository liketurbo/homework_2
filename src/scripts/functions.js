import { TimelineLite } from 'gsap';

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

export const resizeRend = (renderer, camera, parentId) => {
  const parent = document.querySelector(parentId);

  renderer.setSize(parent.offsetWidth, parent.offsetHeight);
  camera.aspect = (parent.offsetWidth / parent.offsetHeight);
  camera.updateProjectionMatrix();
};

export const addEffect = (element, filter) => {
  element.style.webkitFilter = `url(#${filter})`;
  element.style.mozFilter = `url(#${filter})`;
  element.style.filter = `url(#${filter})`;
};

export const runEffect = () => {
  const turb = document.querySelector('#displacement feTurbulence');
  const turbVal = { val: 0.000001 };

  const btTl = new TimelineLite({
    paused: true,
    onUpdate() {
      turb.setAttribute('baseFrequency', `0 ${turbVal.val}`);
    },
  });
  btTl.to(turbVal, 0.2, { val: 0.3 });
  btTl.to(turbVal, 0.2, { val: 0.000001 });

  btTl.restart();
};
