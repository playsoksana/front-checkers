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

import { INITIAL_CHECKERS, CHECKER_COLOR } from "../../Types/Checker";

import styles from "./Board.module.css";


const Board = () => {
  const [allChecker, setAllChecker] = useState(INITIAL_CHECKERS);
  const [currentChecker, setCurrentChecker] = useState(null);
  const [idKilledChecker, setIdKilledChecker] = useState([]);
  const [orderOfStep, setOrderOfStep] = useState(1)

  /* --- */

  const onKillChecked = (arrCoor) => {
    if (!idKilledChecker[0]) {
      return arrCoor;
    }

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
      setOrderOfStep(prev => prev + 1);
    }
  };

  // === START ===

  const isDragStartHandle = (evt) => {
    const currCheck = {
      id: evt.target.id,
      color: evt.target.getAttribute("data-color"),
    };

    const checkersMustKillRes = checkersMustKill(allChecker, currCheck);
    if (checkersMustKillRes.mustKill) {
      setCurrentChecker(prev => ({ ...prev, ...currCheck, mustKill: checkersMustKillRes?.mustKill }))
    } else {
      setCurrentChecker(currCheck);
    }


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

  };

  // === OVER ===

  const onDragOverHandle = (evt) => {
    const checkersMustKillRes = checkersMustKill(allChecker, currentChecker.color);

    if (!canMoveByColor(evt, orderOfStep, currentChecker)) return;
    if (!checkersMustKillRes.canMove) return;
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

  useEffect(() => {
    const getColor = (orderOfStep) => {
      if (orderOfStep % 2 === 0) {
        return CHECKER_COLOR.dark
      }

      return CHECKER_COLOR.white;
    }

    const checkersMustKillRes = checkersMustKill(allChecker, { color: getColor(orderOfStep) });

    if (checkersMustKillRes.mustKill) {
      setCurrentChecker(prev => ({ ...prev, mustKill: checkersMustKillRes?.mustKill }))
    }

  }, [allChecker]);

  /* --- */

  const renderChecker = (i) => {
    const checkerFound = allChecker.find(e => e.id === i.toString());
    const isQueen = allChecker.find(e => e.id === i.toString() && e.queen);
    const isUnderAttack = (currentChecker?.mustKill || []).includes(`${i}`);


    return (
      <Checker
        isRender={checkerFound}
        id={i}
        darkTeam={checkerFound?.color === "Dark"}
        isDragStart={isDragStartHandle}
        isDragEnd={isDragEndHandle}
        isQueen={isQueen}
        isUnderAttack={isUnderAttack}

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
