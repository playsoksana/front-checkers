import { CHECKER_COLOR } from "../../Types/Checker";

import { getObjectByCoordinate } from '../../lib/array';

const canMoveDownRight = (checker, allChecker, evt, idKilledChecker, setIdKilledChecker) => {

    const evtRow = evt.target.getAttribute("data-row");
    const evtCol = evt.target.getAttribute("data-column");
    const nextRowDL = (Number(checker.row) + 1).toString();
    const nextColDL = (Number(checker.col) - 1).toString();
    const throughOneRowDL = (Number(checker.row) + 2).toString();
    const throughOneColDL = (Number(checker.col) - 2).toString();
    const nextCellToDL = getObjectByCoordinate(allChecker, nextRowDL, nextColDL)
    const throughOneCellDL = getObjectByCoordinate(allChecker, throughOneRowDL, throughOneColDL);

    if (checker.color === CHECKER_COLOR.white) {
        if (!nextCellToDL && nextRowDL === evtRow && nextColDL === evtCol) {
            return true;
        }
    }

    const isColorsDifferentDL = (
        nextCellToDL?.color
        && !throughOneCellDL
        && nextCellToDL?.color !== checker.color);

    if (isColorsDifferentDL) {
        if (throughOneRowDL === evtRow && throughOneColDL === evtCol) {
            if (!idKilledChecker.includes(nextCellToDL.id)) {
                setIdKilledChecker(prev => [...prev, nextCellToDL.id]);
            }

            return true;
        }
    }

    return false;
}

export default canMoveDownRight;
