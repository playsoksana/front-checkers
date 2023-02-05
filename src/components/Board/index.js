import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setAllChecker } from '../../redux/allChecker/action';
import { setOrder } from "../../redux/order/actions";

import classNames from "../../lib/class_names";

import { isDragStart, isDragEnd, onDragOver, onDragEnter, onDragLeave, onDrop } from '../../helpers/drags';
import { getCoordinateForChecker } from "../../helpers/get-values-for-board .js";
import checkerMoveByOrder from "../../helpers/checker-can-move-by-order";
import onMoveAndKill from '../../helpers/on-move-and-kill';
import checkerCanMoveByColor from "../../helpers/checker-can-move-by-color.js";
import checkersMustKill from "../../helpers/checkers-must-kill.js";
import checkerMustKillAgain from "../../helpers/checker-must-kill-again";
import addStatusQueen from "../../helpers/add-status-queen";

import Checker from "../Сhecker/Checker";

import { CHECKER_COLOR } from "../../Types/Checker";

import styles from "./styles.module.css";


const storeSelector = (state) => ({
  allChecker: state.allChecker,
  order: state.order,
});

const Board = () => {
  const selector = useSelector(storeSelector);
  const dispatch = useDispatch();
  const { allChecker, order } = selector;


  const [currentChecker, setCurrentChecker] = useState(null);
  const [idKilledChecker, setIdKilledChecker] = useState([]);
  const [win, setWin] = useState(null);


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

  const changeStepNumber = () => {

    const obj = (allChecker || []).find(c => c.id === currentChecker.id);
    if (obj?.col === currentChecker.col && obj?.row === currentChecker.row) {
      return;
    }



    if (currentChecker.row && currentChecker.col) {
      const newCoordAfterMove = ([...allChecker] || []).map(c => {
        if (c.id === currentChecker.id) {
          c.row = currentChecker.row;
          c.col = currentChecker.col;
        }

        return c;
      });

      const newCoordAfterKilled = onKillChecked(newCoordAfterMove);

      const withQueen = addStatusQueen(newCoordAfterKilled, currentChecker);

      if (idKilledChecker[0]) {
        if (checkerMustKillAgain(newCoordAfterKilled, currentChecker, setIdKilledChecker)) {
          return;
        }
      };

      setIdKilledChecker([]);

      dispatch(setOrder());
      dispatch(setAllChecker(withQueen));

    }
  };

  // === START ===

  const isDragStartHandle = (evt) => {
    const currCheck = {
      id: evt.target.id,
      color: evt.target.getAttribute("data-color"),
      role: evt.target.getAttribute("data-role"),
    };

    const checkersMustKillRes = checkersMustKill(allChecker, currCheck);

    if (checkersMustKillRes.mustKill) {
      const values = {
        mustKill: checkersMustKillRes?.mustKill,
        canMove: checkersMustKillRes?.canMove
      }
      setCurrentChecker(prev => ({ ...prev, ...currCheck, ...values }))
    }

    if (!checkersMustKillRes.mustKill) {
      setCurrentChecker(currCheck);
    }

    if (!checkerMoveByOrder(order, currCheck)) {
      return;
    }
    isDragStart(evt);
  };

  // === END ===

  const isDragEndHandle = (evt) => {

    isDragEnd(evt);
    changeStepNumber();
    setCurrentChecker(null);

  };

  // === OVER ===

  const onDragOverHandle = (evt) => {

    const isQueen = currentChecker.role === "queen";
    if (!checkerCanMoveByColor(evt, order, currentChecker)) return;
    if (!currentChecker.canMove) return;
    if (!onMoveAndKill(evt, allChecker, currentChecker, idKilledChecker, setIdKilledChecker)) return;

    onDragOver(evt);
  };

  // === ENTER ===

  const onDragEnterHandle = (evt) => {

    if (!checkerCanMoveByColor(evt, order, currentChecker)) return;
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
    const whiteChecker = allChecker.filter(e => e.color === CHECKER_COLOR.white);
    const darkChecker = allChecker.filter(e => e.color === CHECKER_COLOR.dark);
    // console.log(whiteChecker.length, darkChecker.length);
    if (whiteChecker.length === 0) {
      setWin(CHECKER_COLOR.dark);
    }
    else if (darkChecker.length === 0) {
      setWin(CHECKER_COLOR.white);
    }

    else {
      setWin(null);
    }
  });

  useEffect(() => {
    const getColor = (order) => {
      if (order % 2 === 0) {
        return CHECKER_COLOR.dark
      }

      return CHECKER_COLOR.white;
    }

    const checkersMustKillRes = checkersMustKill(allChecker, { color: getColor(order) });

    if (checkersMustKillRes?.mustKill) {
      setCurrentChecker(prev => ({ ...prev, mustKill: checkersMustKillRes.mustKill }))
    }

  }, [allChecker]);

  /* --- */

  const renderChecker = (r, c) => {
    const checkerFound = (allChecker || []).find(e => e.row === r.toString() && e.col === c.toString());
    const id = checkerFound?.id;
    const isUnderAttack = (currentChecker?.mustKill || []).includes(id);

    const isRender = r.toString() === checkerFound?.row && c.toString() === checkerFound?.col;

    return (
      <Checker
        isRender={checkerFound && isRender}
        id={id || "a"}
        darkTeam={checkerFound?.color === "Dark"}
        isDragStart={isDragStartHandle}
        isDragEnd={isDragEndHandle}
        isQueen={checkerFound?.isQueen}
        isUnderAttack={isUnderAttack}
        isDisabled={win}
      />
    );
  }

  const renderTitleCell = (i) => {
    return (
      <span className={styles.text}>
        R{getCoordinateForChecker(i).row}
        /
        C{getCoordinateForChecker(i).col}
      </span>
    );
  }

  /* --- */
  const fieldClassName = classNames({
    [styles.field]: true,
    [styles.fieldWin]: win,
    [styles.fieldWinWhite]: win === CHECKER_COLOR.white,
    [styles.fieldWinDark]: win === CHECKER_COLOR.dark,
  });

  return (
    <ul className={fieldClassName}>
      {Array(64)
        .fill(1)
        .map((e, i) => {
          const position = getCoordinateForChecker(i);

          const classNamesBoard = classNames({
            [styles.item]: true,
            [styles.dark]: (position.row + position.col) % 2 !== 0,
          });

          return (
            <li
              onDragOver={onDragOverHandle}
              onDragEnter={onDragEnterHandle}
              onDragLeave={onDragLeaveHandle}
              onDrop={onDropHandle}
              key={`${i}`}

              className={classNamesBoard}
              data-row={position.row}
              data-column={position.col}
              data-dark={(position.row + position.col) % 2 !== 0}
            >
              {renderTitleCell(i)}
              {renderChecker(position.row, position.col)}
            </li>
          );
        })}
    </ul>
  );
};

export default Board;
