import React, { useState, useEffect } from "react";

import classNames from "../../lib/class_names";

import { isDragStart, isDragEnd, onDragOver, onDragEnter, onDragLeave, onDrop } from '../../helpers/drags';
import { isRanking, getСoordinates, getDark } from "../../helpers/initial.js";
import getMove from "../../helpers/get-move";
import isCanMoveAndKill from '../../helpers/can-move-and-kill';
import canMoveByColor from "../../helpers/can-move-by-color.js";
import checkersMustKill from "../../helpers/checkers-must-kill.js";
import mustKillAgain from "../../helpers/must-kill-again";
import makeQueen from "../../helpers/make-queen";

import Checker from "../Сhecker/Checker";

import { INITIAL_CHECKERS } from "../../Types/Checker";

import styles from "./Board.module.css";
let orderOfStep = 1;

const Board = () => {
  const [allChecker, setAllChecker] = useState(INITIAL_CHECKERS);
  const [currentChecker, setCurrentChecker] = useState(null);
  const [idKilledChecker, setIdKilledChecker] = useState([]);

  /* --- */

  const onKillChecked = (arrCoor) => {

    if (!idKilledChecker[0]) {

      return arrCoor;
    }
    console.log(arrCoor);
    for (let index = 0; index < idKilledChecker.length; index++) {
      arrCoor = arrCoor.filter(el => el.id !== idKilledChecker[index]);
    }

    return arrCoor;
  }

  /* --- */

  const setStep = () => {
    const obj = allChecker.find(c => c.id === currentChecker.id);
    if (obj.col === currentChecker.col && obj.row === currentChecker.row) {
      return;
    }

    if (currentChecker.row && currentChecker.col) {
      const newCoordAfterMove = allChecker.map(c => {
        if (c.id === currentChecker.id) {
          c.row = currentChecker.row;
          c.col = currentChecker.col;
        }

        return c;
      });

      const newCoordAfterKilled = onKillChecked(newCoordAfterMove);
      const withQueen = makeQueen(newCoordAfterKilled, currentChecker);

      setAllChecker(withQueen);
      if (idKilledChecker[0]) {
        if (mustKillAgain(newCoordAfterKilled, currentChecker, setIdKilledChecker)) {
          console.log("FIX", newCoordAfterKilled);
          return;
        }
      };
      setIdKilledChecker([]);
      orderOfStep += 1;
    }
  };

  // === START ===

  const isDragStartHandle = (evt) => {
    const currCheck = {
      id: evt.target.id,
      color: evt.target.getAttribute("data-color"),
    };

    setCurrentChecker(currCheck);
    if (!getMove(orderOfStep, currCheck)) {
      return;
    }
    isDragStart(evt);
  };

  // === END ===

  const isDragEndHandle = (evt) => {
    isDragEnd(evt);
    setStep();
    setCurrentChecker(null);
    console.log(allChecker);
  };

  // === OVER ===

  const onDragOverHandle = (evt) => {
    if (!canMoveByColor(evt, orderOfStep, currentChecker)) return;
    if (!checkersMustKill(evt, allChecker, currentChecker)) return;
    if (!isCanMoveAndKill(evt, allChecker, currentChecker, idKilledChecker, setIdKilledChecker)) return;
    onDragOver(evt);
  };

  // === ENTER ===

  const onDragEnterHandle = (evt) => {
    if (!canMoveByColor(evt, orderOfStep, currentChecker)) return;
    onDragEnter(evt);
  };

  // === LEAVE ===

  const onDragLeaveHandle = (evt) => {
    onDragLeave(evt);
  }

  // === DROP === if grop

  const onDropHandle = (evt) => {
    const row = evt.target.getAttribute("data-row");
    const col = evt.target.getAttribute("data-column");
    setCurrentChecker((prev) => {
      return { ...prev, row, col }
    });
    onDrop(evt);
  };

  /* --- */
  const renderChecker = (i) => {
    const checkerFound = allChecker.find(e => e.id === i.toString());
    const isQueen = allChecker.find(e => e.id === i.toString() && e.queen);

    return (
      <Checker
        isRender={checkerFound}
        id={i}
        darkTeam={checkerFound?.color === "Dark"}
        isDragStart={isDragStartHandle}
        isDragEnd={isDragEndHandle}
        isQueen={isQueen}
      />
    );
  }

  const renderText = (i) => {
    return (
      <span className={styles.text}>
        R{getСoordinates(i).rowBoard}
        /
        C{getСoordinates(i).columnBoard}
      </span>
    );
  }

  /* --- */

  return (
    <ul className={styles.field}>
      {Array(64)
        .fill(1)
        .map((e, i) => {
          const classNamesBoard = classNames({
            [styles.item]: true,
            [styles.dark]: getDark(i),
          });

          return (
            <li
              onDragOver={onDragOverHandle}
              onDragEnter={onDragEnterHandle}
              onDragLeave={onDragLeaveHandle}
              onDrop={onDropHandle}
              key={i}

              className={classNamesBoard}
              data-row={getСoordinates(i).rowBoard}
              data-column={getСoordinates(i).columnBoard}
              data-dark={getDark(i)}
            >
              {renderText(i)}
              {renderChecker(i)}
            </li>
          );
        })}
    </ul>
  );
};

export default Board;
