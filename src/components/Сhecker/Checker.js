import React from "react";
import style from "./Checker.module.css";

const Checker = ({ darkTeam, isDragStart, isDragEnd }) => {
  const color = darkTeam ? "Dark" : "White";
  return (
    <div
      draggable="true"
      onDragEnd={isDragEnd}
      onDragStart={isDragStart}
      className={[style.Checker, style[color]].join(" ")}
    ></div>
  );
};

export default Checker;
