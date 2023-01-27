import { CHECKER_COLOR } from "../Types/Checker";
import { getObjectByCoordinate } from '../lib/array';

const onMoveAndKill = (evt, allChecker, currentChecker, idKilledChecker, setIdKilledChecker) => {

    const checker = allChecker.find(e => e.id === currentChecker.id);
    const selectedColor = checker.color;
    const evtRow = evt.target.getAttribute("data-row");
    const evtCol = evt.target.getAttribute("data-column");

    //DownRight
    const nextRowDR = (Number(checker.row) + 1).toString();
    const nextColDR = (Number(checker.col) + 1).toString();
    const throughOneRowDR = (Number(checker.row) + 2).toString();
    const throughOneColDR = (Number(checker.col) + 2).toString();
    const nextCellToDR = getObjectByCoordinate(allChecker, nextRowDR, nextColDR)
    const throughOneCellDR = getObjectByCoordinate(allChecker, throughOneRowDR, throughOneColDR);

    //  DownLeft
    const nextRowDL = (Number(checker.row) + 1).toString();
    const nextColDL = (Number(checker.col) - 1).toString();
    const throughOneRowDL = (Number(checker.row) + 2).toString();
    const throughOneColDL = (Number(checker.col) - 2).toString();
    const nextCellToDL = getObjectByCoordinate(allChecker, nextRowDL, nextColDL)
    const throughOneCellDL = getObjectByCoordinate(allChecker, throughOneRowDL, throughOneColDL);

    // UpRight

    const nextRowUR = (Number(checker.row) - 1).toString();
    const nextColUR = (Number(checker.col) + 1).toString();
    const throughOneRowUR = (Number(checker.row) - 2).toString();
    const throughOneColUR = (Number(checker.col) + 2).toString();
    const nextCellToUR = getObjectByCoordinate(allChecker, nextRowUR, nextColUR)
    const throughOneCellUR = getObjectByCoordinate(allChecker, throughOneRowUR, throughOneColUR);

    // UpLeft

    const nextRowUL = (Number(checker.row) - 1).toString();
    const nextColUL = (Number(checker.col) - 1).toString();
    const throughOneRowUL = (Number(checker.row) - 2).toString();
    const throughOneColUL = (Number(checker.col) - 2).toString();
    const nextCellToUL = getObjectByCoordinate(allChecker, nextRowUL, nextColUL)
    const throughOneCellUL = getObjectByCoordinate(allChecker, throughOneRowUL, throughOneColUL);

    // "White" ===========================================
    if (selectedColor === CHECKER_COLOR.white) {
        // short step White
        if (!nextCellToDR && nextRowDR === evtRow && nextColDR === evtCol) {
            return true;
        }
        console.log(!nextCellToDL, nextRowDL === evtRow, nextColDL === evtCol);
        if (!nextCellToDL && nextRowDL === evtRow && nextColDL === evtCol) {
            return true;
        }
    }

    if (selectedColor === CHECKER_COLOR.dark) {
        // short step Dark
        if (!nextCellToUR && nextRowUR === evtRow && nextColUR === evtCol) {
            return true;
        }

        if (!nextCellToUL && nextRowUL === evtRow && nextColUL === evtCol) {
            return true;
        }
    }

    // kill one DownRight
    const isColorsDifferentDR = (
        nextCellToDR?.color
        && !throughOneCellDR
        && nextCellToDR?.color !== selectedColor);

    if (isColorsDifferentDR) {
        if (throughOneRowDR === evtRow && throughOneColDR === evtCol) {
            if (!idKilledChecker.includes(nextCellToDR.id)) {
                setIdKilledChecker(prev => [...prev, nextCellToDR.id]);
            }

            return true;
        }
    }

    // kill one DownLeft
    const isColorsDifferentDL = (
        nextCellToDL?.color
        && !throughOneCellDL
        && nextCellToDL?.color !== selectedColor);

    if (isColorsDifferentDL) {
        if (throughOneRowDL === evtRow && throughOneColDL === evtCol) {
            if (!idKilledChecker.includes(nextCellToDL.id)) {
                setIdKilledChecker(prev => [...prev, nextCellToDL.id]);
            }

            return true;
        }
    }

    // kill one UpRight
    const isColorsDifferentUR = (
        nextCellToUR?.color
        && !throughOneCellUR
        && nextCellToUR?.color !== selectedColor);

    if (isColorsDifferentUR) {
        if (throughOneRowUR === evtRow && throughOneColUR === evtCol) {
            if (!idKilledChecker.includes(nextCellToUR.id)) {
                setIdKilledChecker(prev => [...prev, nextCellToUR.id]);
            }

            return true;
        }
    }

    // kill one UpLeft
    const isColorsDifferentUL = (
        nextCellToUL?.color
        && !throughOneCellUL
        && nextCellToUL?.color !== selectedColor);

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

export default onMoveAndKill;