export const resizeElem = (elemId, parentId) => {
  const elem = document.querySelector(elemId);
  const parent = document.querySelector(parentId);
  elem.width = parent.offsetWidth;
  elem.height = parent.offsetHeight;
};
