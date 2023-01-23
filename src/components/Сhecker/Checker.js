import React from "react";

import { CHECKER_COLOR } from "../../Types/Checker";

import style from "./Checker.module.css";

const Checker = (props) => {
  const color = props.darkTeam ? CHECKER_COLOR.dark : CHECKER_COLOR.white;
  const styleName = props.isRender ? "Checker" : "Hidden";

  return (
    <div
      id={props.id}
      data-color={color}
      data-checker={"checker"}
      draggable="true"
      onDragEnd={props.isDragEnd}
      onDragStart={props.isDragStart}
      className={[style[styleName], style[color]].join(" ")}
    ></div>
  );
};

Checker.defaultProps = {
  id: "",
  darkTeam: false,
  isDragStart: () => { },
  isDragEnd: () => { },
  isRender: false,
}

export default Checker;
