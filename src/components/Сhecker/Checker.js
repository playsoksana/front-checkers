import React from 'react';
import style from './Checker.module.css'

const Checker = ({darkTeam, isDragStart, isDragEnd}) => {


   return <div draggable='true' onDragEnd={isDragEnd} onDragStart={isDragStart} className={`${style.Checker} ${darkTeam ? style.Dark : style.White}` }></div>
}

export default Checker;