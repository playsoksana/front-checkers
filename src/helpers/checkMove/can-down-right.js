import { CHECKER_COLOR } from "../../Types/Checker";

import { getObjectByCoordinate } from '../../lib/array';

const getArrDR = (checker, allChecker, result = []) => {

    const r = Number(checker.row);
    const c = Number(checker.col);
    let step = 1;

    while (r + step <= 9 && c + step <= 9) {
        const row = (r + step).toString();
        const col = (c + step).toString();
        const check = getObjectByCoordinate(allChecker, row, col);
        result.push({ id: check?.id, color: check?.color, row, col });
        step++;
    };

    const indexEnd = result.findIndex((e, i) => {
        if ((e?.id && result[i + 1]?.id) || (e?.color === checker.color) || (e?.id && result.length - 1 === i + 1)) {
            return true;
        }
    });

    const resultWithoutEnd = result.slice(0, indexEnd);
    return resultWithoutEnd;
};

const canMoveDownRight = (checker, allChecker, evt, idKilledChecker, setIdKilledChecker) => {

    const evtRow = evt.target.getAttribute("data-row");
    const evtCol = evt.target.getAttribute("data-column");
    const nextRowDR = (Number(checker.row) + 1).toString();
    const nextColDR = (Number(checker.col) + 1).toString();
    const throughOneRowDR = (Number(checker.row) + 2).toString();
    const throughOneColDR = (Number(checker.col) + 2).toString();
    const nextCellToDR = getObjectByCoordinate(allChecker, nextRowDR, nextColDR);
    const throughOneCellDR = getObjectByCoordinate(allChecker, throughOneRowDR, throughOneColDR);

    if (checker.color === CHECKER_COLOR.white) {
        if (!checker.queen && !nextCellToDR && nextRowDR === evtRow && nextColDR === evtCol) {
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
                console.log(2);
                return true;
            }
            console.log(3);
            return true;
        }
    }


    // QUEEN ======================================


    if (checker.queen) {
        const arrRealSteps = getArrDR(checker, allChecker);
        if (arrRealSteps.length === 0) {
            console.log(1);
            return false;
        }

        const indexVictim = arrRealSteps.findIndex(e => e?.id);
        if (indexVictim === -1) {
            console.log(2);
            return true;
        }

        // add kill
        const arrRealStepsWithoutVictim = arrRealSteps.slice(indexVictim + 1, arrRealSteps.length)


        const findRealCellsAfterDelete = arrRealStepsWithoutVictim.find(e => e.row === evtRow)

        if (findRealCellsAfterDelete) {
            setIdKilledChecker(prev => [...prev, arrRealSteps[indexVictim].id]);
            return true;
        }

        return false;
    }

    return false;
}

export default canMoveDownRight;

