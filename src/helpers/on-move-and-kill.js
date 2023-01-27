import { CHECKER_COLOR } from "../Types/Checker";

const onMoveAndKill = (evt, allChecker, currentChecker, idKilledChecker, setIdKilledChecker) => {

    const selectedChecker = allChecker.find(e => e.id === currentChecker.id);
    const selectedColor = currentChecker.color;
    // console.log(selectedChecker);


    //DownRight
    const nextCellToDownRightCoordinate = { row: (Number(selectedChecker.row) + 1).toString(), col: (Number(selectedChecker.col) + 1).toString() };
    const throughOneCellToDownRightCoordinate = { row: (Number(selectedChecker.row) + 2).toString(), col: (Number(selectedChecker.col) + 2).toString() }
    const nextCellToDownRight = allChecker.find(e => e.row === nextCellToDownRightCoordinate.row && e.col === nextCellToDownRightCoordinate.col);
    const throughOneCellToDownRight = allChecker.find(e => e.row === throughOneCellToDownRightCoordinate.row && e.col === throughOneCellToDownRightCoordinate.col);

    //  DownLeft
    const nextCellToDownLeftCoordinate = { row: (Number(selectedChecker.row) + 1).toString(), col: (Number(selectedChecker.col) - 1).toString() };
    const throughOneCellToDownLeftCoordinate = { row: (Number(selectedChecker.row) + 2).toString(), col: (Number(selectedChecker.col) - 2).toString() };
    const nextCellToDownLeft = allChecker.find(e => e.row === nextCellToDownLeftCoordinate.row && e.col === nextCellToDownLeftCoordinate.col);
    const throughOneCellToDownLeft = allChecker.find(e => e.row === throughOneCellToDownLeftCoordinate.row && e.col === throughOneCellToDownLeftCoordinate.col);

    // UpRight

    const nextCellToUpRightCoordinate = { row: (Number(selectedChecker.row) - 1).toString(), col: (Number(selectedChecker.col) + 1).toString() };
    const throughOneCellToUpRightCoordinate = { row: (Number(selectedChecker.row) - 2).toString(), col: (Number(selectedChecker.col) + 2).toString() }
    const nextCellToUpRight = allChecker.find(e => e.row === nextCellToUpRightCoordinate.row && e.col === nextCellToUpRightCoordinate.col);
    const throughOneCellToUpRight = allChecker.find(e => e.row === throughOneCellToUpRightCoordinate.row && e.col === throughOneCellToUpRightCoordinate.col);

    // UpLeft

    const nextCellToUpLeftCoordinate = { row: (Number(selectedChecker.row) - 1).toString(), col: (Number(selectedChecker.col) - 1).toString() };
    const throughOneCellToUpLeftCoordinate = { row: (Number(selectedChecker.row) - 2).toString(), col: (Number(selectedChecker.col) - 2).toString() }
    const nextCellToUpLeft = allChecker.find(e => e.row === nextCellToUpLeftCoordinate.row && e.col === nextCellToUpLeftCoordinate.col);
    const throughOneCellToUpLeft = allChecker.find(e => e.row === throughOneCellToUpLeftCoordinate.row && e.col === throughOneCellToUpLeftCoordinate.col);

    // "White" ===========================================
    if (selectedColor === CHECKER_COLOR.white) {
        // short step White
        if (!nextCellToDownRight && nextCellToDownRightCoordinate.row === evt.target.getAttribute("data-row") && nextCellToDownRightCoordinate.col === evt.target.getAttribute("data-column")) {
            return true;
        }
        if (!nextCellToDownLeft && nextCellToDownLeftCoordinate.row === evt.target.getAttribute("data-row") && nextCellToDownLeftCoordinate.col === evt.target.getAttribute("data-column")) {
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
    if (nextCellToDownRight?.color && !throughOneCellToDownRight && nextCellToDownRight?.color !== currentChecker?.color) {
        if (throughOneCellToDownRightCoordinate.row === evt.target.getAttribute("data-row") && throughOneCellToDownRightCoordinate.col === evt.target.getAttribute("data-column")) {
            console.log(idKilledChecker);
            if (!idKilledChecker.includes(nextCellToDownRight.id)) {
                setIdKilledChecker(prev => [...prev, nextCellToDownRight.id]);
            }

            return true;
        }
    }

    // kill one DownLeft
    if (nextCellToDownLeft?.color && !throughOneCellToDownLeft && nextCellToDownLeft?.color !== currentChecker?.color) {
        if (throughOneCellToDownLeftCoordinate.row === evt.target.getAttribute("data-row") && throughOneCellToDownLeftCoordinate.col === evt.target.getAttribute("data-column")) {
            if (!idKilledChecker.includes(nextCellToDownLeft.id)) {
                setIdKilledChecker(prev => [...prev, nextCellToDownLeft.id]);
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