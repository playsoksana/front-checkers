import { useState } from "react";
import style from "./Board.module.css";

import Checker from "../Сhecker/Checker";
import {isDragStart, isDragEnd, onDragOver, onDragEnter, onDragLeave, onDrop} from '../../helpers/drags';
const Board = () => {
  const [darkTeam, setDarkTeam] = useState(false);
 
  const ROW = ["A", "B", "C", "D", "E", "F", "G", "H"].reverse();

  const getСoordinates = (i) => {
    let rowBoard = Math.floor(i / 8);
    let columnBoard = Math.floor(i - 8 * rowBoard + 1);
    return { rowBoard, columnBoard };
  };

  const getDark = (i) => {
    if (Math.floor(i / 8) % 2 === 0) {
      return i % 2 !== 0;
    }
    return i % 2 === 0;
  };

  const isRanking = (i) =>  
      getDark(i) && getСoordinates(i).rowBoard !== 3 &&
      getСoordinates(i).rowBoard !== 4;
    
   return (
    <ul className={style.Field}>
      {Array(64)
        .fill(1)
        .map((e, i) => {
          return (
            <li
            onDragOver={onDragOver}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop = {onDrop}
              key={i}
    
              className={`${style.Item} ${getDark(i) && style.Dark }`}
              data-row={getСoordinates(i).rowBoard + 1}
              data-column={getСoordinates(i).columnBoard}
            >
              <span className={style.Text}>
                {ROW[getСoordinates(i).rowBoard]}
                {getСoordinates(i).columnBoard}
              </span>
              {isRanking(i) && (
                <Checker              
                  isDragStart={isDragStart}
                  isDragEnd={isDragEnd}
                  darkTeam={getСoordinates(i).rowBoard>4}
                ></Checker>
              )}
            </li>
          );
        })}
    </ul>
  );
};

export default Board;
