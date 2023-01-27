import { CHECKER_COLOR } from "../../Types/Checker";

import { getObjectByCoordinate } from '../../lib/array';

const canMoveUpRight = (checker, allChecker, evt, idKilledChecker, setIdKilledChecker) => {

    const evtRow = evt.target.getAttribute("data-row");
    const evtCol = evt.target.getAttribute("data-column");
    const nextRowUL = (Number(checker.row) - 1).toString();
    const nextColUL = (Number(checker.col) - 1).toString();
    const throughOneRowUL = (Number(checker.row) - 2).toString();
    const throughOneColUL = (Number(checker.col) - 2).toString();
    const nextCellToUL = getObjectByCoordinate(allChecker, nextRowUL, nextColUL)
    const throughOneCellUL = getObjectByCoordinate(allChecker, throughOneRowUL, throughOneColUL);


    if (checker.color === CHECKER_COLOR.dark) {
        if (!nextCellToUL && nextRowUL === evtRow && nextColUL === evtCol) {
            return true;
        }
    }

    const isColorsDifferentUL = (
        nextCellToUL?.color
        && !throughOneCellUL
        && nextCellToUL?.color !== checker.color);

    if (isColorsDifferentUL) {
        if (throughOneRowUL === evtRow && throughOneColUL === evtCol) {
            if (!idKilledChecker.includes(nextCellToUL.id)) {
                setIdKilledChecker(prev => [...prev, nextCellToUL.id]);
            }

            return true;
        }
    }

    return false;
}

export default canMoveUpRight;

