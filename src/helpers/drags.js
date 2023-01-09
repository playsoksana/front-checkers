let currentItem = null;

export const isDragStart = (ev) => {
  currentItem = ev.target;
    ev.target.classList.add(`gavno`);
    setTimeout(()=>{
        ev.target.classList.add(`hide`)}, 0)
   
  };


 export const isDragEnd = (ev) => {
    // ev.target.classList.remove(`gavno`);
    ev.target.classList.remove(`hide`);
  };


  export const onDragEnter = (e) => {
    console.log(1, e);
    e.target.classList.add('hovered')
    
  };

  export const onDragOver = (e) => {
   e.preventDefault();
  };

 
  export const  onDragLeave = (e) => {
    console.log(3, e);
    e.target.classList.remove('hovered')    
  };

  export const onDrop = (e) => {
    e.target.append(currentItem);
    e.target.classList.remove('hovered');
  }


