import { CHECKER_COLOR } from "../../Types/Checker";

import { getObjectByCoordinate } from '../../lib/array';

const canMoveDownRight = (checker, allChecker, evt, idKilledChecker, setIdKilledChecker) => {

    const evtRow = evt.target.getAttribute("data-row");
    const evtCol = evt.target.getAttribute("data-column");
    const nextRowDR = (Number(checker.row) + 1).toString();
    const nextColDR = (Number(checker.col) + 1).toString();
    const throughOneRowDR = (Number(checker.row) + 2).toString();
    const throughOneColDR = (Number(checker.col) + 2).toString();
    const nextCellToDR = getObjectByCoordinate(allChecker, nextRowDR, nextColDR)
    const throughOneCellDR = getObjectByCoordinate(allChecker, throughOneRowDR, throughOneColDR);

    if (checker.color === CHECKER_COLOR.white) {
        if (!nextCellToDR && nextRowDR === evtRow && nextColDR === evtCol) {
            return true;
        }
    }

    const isColorsDifferentDR = (
        nextCellToDR?.color
        && !throughOneCellDR
        && nextCellToDR?.color !== checker.color);

    if (isColorsDifferentDR) {
        if (throughOneRowDR === evtRow && throughOneColDR === evtCol) {
            if (!idKilledChecker.includes(nextCellToDR.id)) {
                setIdKilledChecker(prev => [...prev, nextCellToDR.id]);
            }

            return true;
        }
    }
    return false;
}

export default canMoveDownRight;

