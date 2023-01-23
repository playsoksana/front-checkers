import { CHECKER_COLOR } from "../Types/Checker";


const mustKillAgain = (allChecker, currentChecker, setIdKilledChecker) => {
    const selectedChecker = (allChecker || []).find(e => e.id === currentChecker?.id);
    const selectedColor = currentChecker.color;

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

    // kill one DownRight

    console.log(nextCellToDownRight, throughOneCellToDownRight);
    return false;
};

export default mustKillAgain;