let currentItem = null;

export const isDragStart = (ev) => {
  currentItem = ev.target;
    ev.target.classList.add(`gavno`);
    setTimeout(()=>{
        ev.target.classList.add(`hide`)}, 0)
  
  };
 export const isDragEnd = (ev) => {
    ev.target.classList.remove(`gavno`);
    ev.target.classList.remove(`hide`);
  };


  export const onDragEnter = (e) => {
    console.log(2, e);

    e.target.classList.add('hovered')
    
  };

  export const onDragOver = (e) => {
    console.log(1, e);
   e.preventDefault();
  };

 
  export const  onDragLeave = (e) => {
    console.log(3, e);
    e.target.classList.remove('hovered')
    
  };

  export const onDrop = (e) => {
    console.log(4, e);
    console.log(5, e.target)
    console.log(6, currentItem)
    e.target.append(currentItem);
    e.target.classList.remove('hovered');
  }


