export const isDragStart = (ev) => {
  ev.target.classList.add(`shadow`);
  setTimeout(() => {
    ev.target.classList.add(`hide`)
  }, 0)

};


export const isDragEnd = (ev) => {
  ev.target.classList.remove(`hide`);
};


export const onDragEnter = (e) => {
  e.target.classList.add('hovered')

};

export const onDragOver = (e) => {
  // console.log(4);
  e.preventDefault();
};


export const onDragLeave = (e) => {
  // console.log(3);
  e.target.classList.remove('hovered')
};

export const onDrop = (e) => { //при падении
  e.target.classList.remove('hovered');
}


