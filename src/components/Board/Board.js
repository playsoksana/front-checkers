import React, { useState, useEffect } from "react";

import classNames from "../../lib/class_names";

import { isDragStart, isDragEnd, onDragOver, onDragEnter, onDragLeave, onDrop } from '../../helpers/drags';
import { isRanking, getСoordinates, getDark } from "../../helpers/initial.js";
import getMove from "../../helpers/get-move";
import isCanMoveAndKill from '../../helpers/can-move-and-kill';
import canMoveByColor from "../../helpers/can-move-by-color.js";
import checkersMustKill from "../../helpers/checkers-must-kill.js";

import Checker from "../Сhecker/Checker";

import styles from "./Board.module.css";
let orderOfStep = 1;

const Board = () => {
  const [allChecker, setAllChecker] = useState([
    { id: '1', color: 'White', row: '1', col: '2' },
    { id: '3', color: 'White', row: '1', col: '4' },
    { id: '5', color: 'White', row: '1', col: '6' },
    { id: '7', color: 'White', row: '1', col: '8' },
    { id: '8', color: 'White', row: '2', col: '1' },
    { id: '10', color: 'White', row: '2', col: '3' },
    { id: '12', color: 'White', row: '2', col: '5' },
    { id: '14', color: 'White', row: '2', col: '7' },
    { id: '17', color: 'White', row: '3', col: '2' },
    { id: '19', color: 'White', row: '3', col: '4' },
    { id: '21', color: 'White', row: '3', col: '6' },
    { id: '23', color: 'White', row: '3', col: '8' },
    { id: '40', color: 'Dark', row: '6', col: '1' },
    { id: '42', color: 'Dark', row: '6', col: '3' },
    { id: '44', color: 'Dark', row: '6', col: '5' },
    { id: '46', color: 'Dark', row: '6', col: '7' },
    { id: '49', color: 'Dark', row: '7', col: '2' },
    { id: '51', color: 'Dark', row: '7', col: '4' },
    { id: '53', color: 'Dark', row: '7', col: '6' },
    { id: '55', color: 'Dark', row: '7', col: '8' },
    { id: '56', color: 'Dark', row: '8', col: '1' },
    { id: '58', color: 'Dark', row: '8', col: '3' },
    { id: '60', color: 'Dark', row: '8', col: '5' },
    { id: '62', color: 'Dark', row: '8', col: '7' },
  ]);
  const [currentChecker, setCurrentChecker] = useState(null);
  const [idKilledChecker, setIdKilledChecker] = useState([]);

  /* --- */



  /* --- */

  const onKillChecked = (arrCoor) => {

    if (!idKilledChecker[0]) {
      return arrCoor;
    }

    for (let index = 0; index < idKilledChecker.length; index++) {
      arrCoor = arrCoor.filter(el => el.id !== idKilledChecker[index].id);
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

      orderOfStep += 1;
      const newCoordAfterKilled = onKillChecked(newCoordAfterMove);

      setAllChecker(newCoordAfterKilled);
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

    // console.log(111111111);
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
    if (!canMoveByColor(evt, orderOfStep, currentChecker)) return;
    if (!checkersMustKill(evt, allChecker, currentChecker)) return;
    if (!isCanMoveAndKill(evt, allChecker, currentChecker, setIdKilledChecker)) return;

    // console.log(3333333333333);
    onDragOver(evt);
  };

  // === ENTER ===

  const onDragEnterHandle = (evt) => {
    if (!canMoveByColor(evt, orderOfStep, currentChecker)) return;
    // console.log(444444444444,);
    onDragEnter(evt);
  };

  // === LEAVE ===

  const onDragLeaveHandle = (evt) => {
    // console.log(5555555555555);
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
  const renderChecker = ({ i }) => {
    const checkerFound = allChecker.find(e => e.id === i.toString());

    return (
      <Checker
        isRender={checkerFound}
        id={i}
        darkTeam={checkerFound?.color === "Dark"}
        isDragStart={isDragStartHandle}
        isDragEnd={isDragEndHandle}
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
              {renderChecker({
                i,
                row: getСoordinates(i).rowBoard + 1,
                col: getСoordinates(i).columnBoard
              })}
            </li>
          );
        })}
    </ul>
  );
};

export default Board;
