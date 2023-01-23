

const checkersMustKill = (evt, allChecker, currentChecker) => {
    const checkerWhoMustKill = [];
    const selectedChecker = allChecker.find(e => e.id === currentChecker.id);
    const selectedColor = currentChecker.color;
    const checkerByColor = allChecker.filter(e => e.color === selectedColor);


    for (let i = 0; i < checkerByColor.length; i++) {
        const checker = checkerByColor[i];

        //DownRight
        const nextCellToDownRightCoordinate = { row: (Number(checker.row) + 1).toString(), col: (Number(checker.col) + 1).toString() };
        const throughOneCellToDownRightCoordinate = { row: (Number(checker.row) + 2).toString(), col: (Number(checker.col) + 2).toString() }
        const nextCellToDownRight = allChecker.find(e => e.row === nextCellToDownRightCoordinate.row && e.col === nextCellToDownRightCoordinate.col);
        const throughOneCellToDownRight = allChecker.find(e => e.row === throughOneCellToDownRightCoordinate.row && e.col === throughOneCellToDownRightCoordinate.col);

        if (nextCellToDownRight
            && nextCellToDownRight?.color !== selectedColor
            && !throughOneCellToDownRight
            && throughOneCellToDownRightCoordinate.col < 9
            && throughOneCellToDownRightCoordinate.row < 9) {
            if (!checkerWhoMustKill.includes(checkerByColor[i].id)) {
                checkerWhoMustKill.push(checkerByColor[i].id)
            }
        }

        //  DownLeft
        const nextCellToDownLeftCoordinate = { row: (Number(checker.row) + 1).toString(), col: (Number(checker.col) - 1).toString() };
        const throughOneCellToDownLeftCoordinate = { row: (Number(checker.row) + 2).toString(), col: (Number(checker.col) - 2).toString() };
        const nextCellToDownLeft = allChecker.find(e => e.row === nextCellToDownLeftCoordinate.row && e.col === nextCellToDownLeftCoordinate.col);
        const throughOneCellToDownLeft = allChecker.find(e => e.row === throughOneCellToDownLeftCoordinate.row && e.col === throughOneCellToDownLeftCoordinate.col);

        if (nextCellToDownLeft
            && nextCellToDownLeft?.color !== selectedColor
            && !throughOneCellToDownLeft
            && throughOneCellToDownLeftCoordinate.col > 0
            && throughOneCellToDownLeftCoordinate.row < 9) {
            if (!checkerWhoMustKill.includes(checkerByColor[i].id)) {
                checkerWhoMustKill.push(checkerByColor[i].id)
            }
        }

        // UpRight
        const nextCellToUpRightCoordinate = { row: (Number(checker.row) - 1).toString(), col: (Number(checker.col) + 1).toString() };
        const throughOneCellToUpRightCoordinate = { row: (Number(checker.row) - 2).toString(), col: (Number(checker.col) + 2).toString() }
        const nextCellToUpRight = allChecker.find(e => e.row === nextCellToUpRightCoordinate.row && e.col === nextCellToUpRightCoordinate.col);
        const throughOneCellToUpRight = allChecker.find(e => e.row === throughOneCellToUpRightCoordinate.row && e.col === throughOneCellToUpRightCoordinate.col);
        if (nextCellToUpRight
            && nextCellToUpRight?.color !== selectedColor
            && !throughOneCellToUpRight
            && throughOneCellToUpRightCoordinate.col < 9
            && throughOneCellToUpRightCoordinate.row > 0
        ) {
            if (!checkerWhoMustKill.includes(checkerByColor[i].id)) {
                checkerWhoMustKill.push(checkerByColor[i].id)
            }
        }

        // UpLeft
        const nextCellToUpLeftCoordinate = { row: (Number(checker.row) - 1).toString(), col: (Number(checker.col) - 1).toString() };
        const throughOneCellToUpLeftCoordinate = { row: (Number(checker.row) - 2).toString(), col: (Number(checker.col) - 2).toString() }
        const nextCellToUpLeft = allChecker.find(e => e.row === nextCellToUpLeftCoordinate.row && e.col === nextCellToUpLeftCoordinate.col);
        const throughOneCellToUpLeft = allChecker.find(e => e.row === throughOneCellToUpLeftCoordinate.row && e.col === throughOneCellToUpLeftCoordinate.col);
        if (nextCellToUpLeft
            && nextCellToUpLeft?.color !== selectedColor
            && !throughOneCellToUpLeft
            && throughOneCellToUpLeftCoordinate.col > 0
            && throughOneCellToUpLeftCoordinate.row > 0) {
            if (!checkerWhoMustKill.includes(checkerByColor[i].id)) {
                checkerWhoMustKill.push(checkerByColor[i].id)
            }
        }

    }

    if (!checkerWhoMustKill[0]) {
        return true;
    }

    return checkerWhoMustKill.includes(currentChecker.id);
}

export default checkersMustKill;