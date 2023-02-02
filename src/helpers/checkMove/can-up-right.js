import { CHECKER_COLOR } from "../../Types/Checker";

import { getObjectByCoordinate } from '../../lib/array';

const canMoveUpRight = (checker, allChecker, evt, idKilledChecker, setIdKilledChecker) => {

    const evtRow = evt.target.getAttribute("data-row");
    const evtCol = evt.target.getAttribute("data-column");
    const nextRowUR = (Number(checker.row) - 1).toString();
    const nextColUR = (Number(checker.col) + 1).toString();
    const throughOneRowUR = (Number(checker.row) - 2).toString();
    const throughOneColUR = (Number(checker.col) + 2).toString();
    const nextCellToUR = getObjectByCoordinate(allChecker, nextRowUR, nextColUR)
    const throughOneCellUR = getObjectByCoordinate(allChecker, throughOneRowUR, throughOneColUR);

    if (checker.color === CHECKER_COLOR.dark) {
        if (!nextCellToUR && nextRowUR === evtRow && nextColUR === evtCol) {
            return true;
        }
    }

    const isColorsDifferentUR = (
        nextCellToUR?.color
        && !throughOneCellUR
        && nextCellToUR?.color !== checker.color);

    if (isColorsDifferentUR) {
        if (throughOneRowUR === evtRow && throughOneColUR === evtCol) {
            if (!idKilledChecker.includes(nextCellToUR.id)) {
                setIdKilledChecker(prev => [...prev, nextCellToUR.id]);
            }

            return true;
        }
    }

    return false;
}

export default canMoveUpRight;

