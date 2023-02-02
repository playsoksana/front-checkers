import React from "react";

import classNames from "../../lib/class_names";

import { CHECKER_COLOR } from "../../Types/Checker";

import IconCrown from "../../Icon/Crown/index";

import styles from "./Checker.module.css";

const Checker = (props) => {

  const color = props.darkTeam ? CHECKER_COLOR.dark : CHECKER_COLOR.white;

  const renderCrown = () => {
    if (!props.isQueen) {
      return null;
    }
    return (<IconCrown className={styles.iconCrown} />);
  };

  const classNameChecker = classNames({
    [styles.checkerDefault]: true,
    [styles.checker]: props.isRender,
    [styles.dark]: props.darkTeam,
    [styles.white]: !props.darkTeam,
    [styles.underAttack]: props.isUnderAttack,
  });

  return (
    <div
      id={props.id}
      data-color={color}
      data-checker={"checker"}
      data-role={props.isQueen ? "queen" : "checker"}
      draggable="true"
      onDragEnd={props.isDragEnd}
      onDragStart={props.isDragStart}
      className={classNameChecker}

    >
      {renderCrown()}
    </div>
  );
};

Checker.defaultProps = {
  id: "",
  darkTeam: false,
  isDragStart: () => { },
  isDragEnd: () => { },
  isRender: false,
  isQueen: false,
  isUnderAttack: false,
}

export default Checker;
