
import {
    canMoveDownRight,
    canMoveDownLeft,
    canMoveUpRight,
    canMoveUpLeft
} from "../helpers/checkMove/index";


const onMoveAndKill = (evt, allChecker, currentChecker, idKilledChecker, setIdKilledChecker) => {
    const checker = allChecker.find(e => e.id === currentChecker.id);
    const evtRow = evt.target.getAttribute("data-row");
    const evtCol = evt.target.getAttribute("data-column");

    const divergenceRowDR = Number(evtRow) - Number(checker.row);
    const divergenceColDR = Number(evtCol) - Number(checker.col);
    const divergenceRowDL = Number(evtRow) - Number(checker.row);
    const divergenceColDL = Number(checker.col) - Number(evtCol);

    // DownRight
    if (divergenceRowDR > 0 && divergenceRowDR === divergenceColDR) {
        return canMoveDownRight(checker, allChecker, evt, idKilledChecker, setIdKilledChecker);
    }

    //  DownLeft
    if (divergenceRowDL > 0 && divergenceRowDL === divergenceColDL) {
        return canMoveDownLeft(checker, allChecker, evt, idKilledChecker, setIdKilledChecker);
    }

    // UpRight
    if (divergenceRowDR < 0 && divergenceRowDR === divergenceColDL) {
        return canMoveUpRight(checker, allChecker, evt, idKilledChecker, setIdKilledChecker);
    }

    // UpLeft
    if (divergenceRowDR < 0 && divergenceRowDR === divergenceRowDR) {
        return canMoveUpLeft(checker, allChecker, evt, idKilledChecker, setIdKilledChecker);
    }

    return false;
}

export default onMoveAndKill;