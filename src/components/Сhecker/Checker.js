import React from "react";

import classNames from "../../lib/class_names";

import { CHECKER_COLOR } from "../../Types/Checker";

import styles from "./Checker.module.css";

const Checker = (props) => {
  const color = props.darkTeam ? CHECKER_COLOR.dark : CHECKER_COLOR.white;
  const classNameChecker = classNames({
    [styles.checker]: props.isRender,
    [styles.dark]: props.darkTeam,
    [styles.white]: !props.darkTeam,
  });

  return (
    <div
      id={props.id}
      data-color={color}
      data-checker={"checker"}
      draggable="true"
      onDragEnd={props.isDragEnd}
      onDragStart={props.isDragStart}
      className={classNameChecker}
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
