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

    const nextCellToUpRightCoordinate = { row: (Number(checker.row) - 1).toString(), col: (Number(checker.col) + 1).toString() };
    const throughOneCellToUpRightCoordinate = { row: (Number(checker.row) - 2).toString(), col: (Number(checker.col) + 2).toString() }
    const nextCellToUpRight = allChecker.find(e => e.row === nextCellToUpRightCoordinate.row && e.col === nextCellToUpRightCoordinate.col);
    const throughOneCellToUpRight = allChecker.find(e => e.row === throughOneCellToUpRightCoordinate.row && e.col === throughOneCellToUpRightCoordinate.col);

    // UpLeft

    const nextCellToUpLeftCoordinate = { row: (Number(checker.row) - 1).toString(), col: (Number(checker.col) - 1).toString() };
    const throughOneCellToUpLeftCoordinate = { row: (Number(checker.row) - 2).toString(), col: (Number(checker.col) - 2).toString() }
    const nextCellToUpLeft = allChecker.find(e => e.row === nextCellToUpLeftCoordinate.row && e.col === nextCellToUpLeftCoordinate.col);
    const throughOneCellToUpLeft = allChecker.find(e => e.row === throughOneCellToUpLeftCoordinate.row && e.col === throughOneCellToUpLeftCoordinate.col);

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
        if (!nextCellToUpRight && nextCellToUpRightCoordinate.row === evt.target.getAttribute("data-row") && nextCellToUpRightCoordinate.col === evt.target.getAttribute("data-column")) {
            return true;
        }
        if (!nextCellToUpLeft && nextCellToUpLeftCoordinate.row === evt.target.getAttribute("data-row") && nextCellToUpLeftCoordinate.col === evt.target.getAttribute("data-column")) {
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
    if (nextCellToUpRight?.color && !throughOneCellToUpRight && nextCellToUpRight?.color !== currentChecker?.color) {
        if (throughOneCellToUpRightCoordinate.row === evt.target.getAttribute("data-row") && throughOneCellToUpRightCoordinate.col === evt.target.getAttribute("data-column")) {
            if (!idKilledChecker.includes(nextCellToUpRight.id)) {
                setIdKilledChecker(prev => [...prev, nextCellToUpRight.id]);
            }
            return true;
        }
    }

    // kill one UpLeft
    if (nextCellToUpLeft?.color && !throughOneCellToUpLeft && nextCellToUpLeft?.color !== currentChecker?.color) {
        if (throughOneCellToUpLeftCoordinate.row === evt.target.getAttribute("data-row") && throughOneCellToUpLeftCoordinate.col === evt.target.getAttribute("data-column")) {
            if (!idKilledChecker.includes(nextCellToUpLeft.id)) {
                setIdKilledChecker(prev => [...prev, nextCellToUpLeft.id]);
            }

            return true;
        }
        return false;
    }
    return false;
}

export default onMoveAndKill;