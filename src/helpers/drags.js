let currentItem = null;

export const isDragStart = (style) => (ev) => {
  currentItem = ev.target;
  ev.target.classList.add(style.gavno);
  setTimeout(() => {
    ev.target.classList.add(style.hide);
  }, 0);
};

export const isDragEnd = (style) => (ev) => {
  ev.target.classList.remove(style.gavno);
  ev.target.classList.remove(style.hide);
};

export const onDragEnter = (e) => {
  console.log(2, e);

  e.target.classList.add("hovered");
};

export const onDragOver = (e) => {
  console.log(1, e);
  e.preventDefault();
};

export const onDragLeave = (style) => (e) => {
  console.log(3, e);
  e.target.classList.remove(hovered.hovered);
};

export const onDrop = (style) => (e) => {
  console.log(4, e);
  console.log(5, e.target);
  console.log(6, currentItem);
  e.target.append(currentItem);
  e.target.classList.remove(hovered.hovered);
};
