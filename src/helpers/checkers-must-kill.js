

const checkersMustKill = (allChecker, currentChecker) => {
    const result = {};
    const checkerWhoMustKill = [];
    const checkerThatPossibleKill = [];

    const selectedColor = currentChecker?.color;
    const checkerByColor = allChecker.filter(e => e.color === selectedColor);
    console.log(selectedColor);

    for (let i = 0; i < checkerByColor.length; i++) {
        const checker = checkerByColor[i];

        //DownRight
        const nextCellToDownRightCoordinate = { row: (Number(checker.row) + 1).toString(), col: (Number(checker.col) + 1).toString() };
        const throughOneCellToDownRightCoordinate = { row: (Number(checker.row) + 2).toString(), col: (Number(checker.col) + 2).toString() }
        const nextCellToDownRight = allChecker.find(e => e.row === nextCellToDownRightCoordinate.row && e.col === nextCellToDownRightCoordinate.col);
        const throughOneCellToDownRight = allChecker.find(e => e.row === throughOneCellToDownRightCoordinate.row && e.col === throughOneCellToDownRightCoordinate.col);
        console.log(1, nextCellToDownRight, checkerThatPossibleKill);
        if (nextCellToDownRight
            && nextCellToDownRight?.color !== selectedColor
            && !throughOneCellToDownRight
            && throughOneCellToDownRightCoordinate.col < 9
            && throughOneCellToDownRightCoordinate.row < 9) {
            if (!checkerWhoMustKill.includes(checkerByColor[i].id)) {
                checkerThatPossibleKill.push(nextCellToDownRight.id);
                checkerWhoMustKill.push(checkerByColor[i].id)
            }
        }

        //  DownLeft
        const nextCellToDownLeftCoordinate = { row: (Number(checker.row) + 1).toString(), col: (Number(checker.col) - 1).toString() };
        const throughOneCellToDownLeftCoordinate = { row: (Number(checker.row) + 2).toString(), col: (Number(checker.col) - 2).toString() };
        const nextCellToDownLeft = allChecker.find(e => e.row === nextCellToDownLeftCoordinate.row && e.col === nextCellToDownLeftCoordinate.col);
        const throughOneCellToDownLeft = allChecker.find(e => e.row === throughOneCellToDownLeftCoordinate.row && e.col === throughOneCellToDownLeftCoordinate.col);
        console.log(2, nextCellToDownLeft, checkerThatPossibleKill);
        if (nextCellToDownLeft
            && nextCellToDownLeft?.color !== selectedColor
            && !throughOneCellToDownLeft
            && throughOneCellToDownLeftCoordinate.col > 0
            && throughOneCellToDownLeftCoordinate.row < 9) {
            if (!checkerWhoMustKill.includes(checkerByColor[i].id)) {
                checkerThatPossibleKill.push(nextCellToDownLeft.id);
                checkerWhoMustKill.push(checkerByColor[i].id)
            }
        }

        // UpRight
        const nextCellToUpRightCoordinate = { row: (Number(checker.row) - 1).toString(), col: (Number(checker.col) + 1).toString() };
        const throughOneCellToUpRightCoordinate = { row: (Number(checker.row) - 2).toString(), col: (Number(checker.col) + 2).toString() }
        const nextCellToUpRight = allChecker.find(e => e.row === nextCellToUpRightCoordinate.row && e.col === nextCellToUpRightCoordinate.col);
        const throughOneCellToUpRight = allChecker.find(e => e.row === throughOneCellToUpRightCoordinate.row && e.col === throughOneCellToUpRightCoordinate.col);
        console.log(3, nextCellToUpRight, checkerThatPossibleKill);
        if (nextCellToUpRight
            && nextCellToUpRight?.color !== selectedColor
            && !throughOneCellToUpRight
            && throughOneCellToUpRightCoordinate.col < 9
            && throughOneCellToUpRightCoordinate.row > 0
        ) {
            if (!checkerWhoMustKill.includes(checkerByColor[i].id)) {
                checkerThatPossibleKill.push(nextCellToUpRight.id);
                checkerWhoMustKill.push(checkerByColor[i].id)
            }
        }

        // UpLeft
        const nextCellToUpLeftCoordinate = { row: (Number(checker.row) - 1).toString(), col: (Number(checker.col) - 1).toString() };
        const throughOneCellToUpLeftCoordinate = { row: (Number(checker.row) - 2).toString(), col: (Number(checker.col) - 2).toString() }
        const nextCellToUpLeft = allChecker.find(e => e.row === nextCellToUpLeftCoordinate.row && e.col === nextCellToUpLeftCoordinate.col);
        const throughOneCellToUpLeft = allChecker.find(e => e.row === throughOneCellToUpLeftCoordinate.row && e.col === throughOneCellToUpLeftCoordinate.col);
        console.log(4, nextCellToUpLeft, checkerThatPossibleKill);
        if (nextCellToUpLeft
            && nextCellToUpLeft?.color !== selectedColor
            && !throughOneCellToUpLeft
            && throughOneCellToUpLeftCoordinate.col > 0
            && throughOneCellToUpLeftCoordinate.row > 0) {
            if (!checkerWhoMustKill.includes(checkerByColor[i].id)) {
                checkerThatPossibleKill.push(nextCellToUpLeft.id);
                checkerWhoMustKill.push(checkerByColor[i].id)
            }
        }

    }

    console.log(9999, checkerThatPossibleKill);

    if (!checkerWhoMustKill[0]) {
        result.canMove = true;
        result.mustKill = checkerThatPossibleKill;
        return result;
    }

    result.canMove = checkerWhoMustKill.includes(currentChecker?.id);
    result.mustKill = checkerThatPossibleKill;
    return result;
}

export default checkersMustKill;