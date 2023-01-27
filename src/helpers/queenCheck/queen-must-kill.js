import { getObjectByCoordinate } from '../../lib/array.js';

const checkQueenDownRight = (queen, allChecker) => {
    const nextRow = (Number(queen.row) + 1).toString();
    const throughOneRow = (Number(queen.row) + 2).toString();
    const nextCol = (Number(queen.col) + 1).toString();
    const throughOneCol = (Number(queen.col) + 2).toString();
    const nextCell = getObjectByCoordinate(allChecker, nextRow, nextCol);
    const beUnableKill = queen?.color && (nextCell?.color === queen?.color || nextRow >= 8 || nextCol >= 8);

    if (beUnableKill) {
        return null;
    }

    if (nextCell) {
        const throughOneCell = getObjectByCoordinate(allChecker, throughOneRow, throughOneCol);
        if (!throughOneCell) {
            return nextCell.id;
        }

        return null;
    }

    const newQueen = { ...queen, row: nextRow, col: nextCol };

    return checkQueenDownRight(newQueen, allChecker);
}

/* --- */

const checkQueenDownLeft = (queen, allChecker) => {
    let idDownLeft = null;
    const nextRow = (Number(queen.row) + 1).toString();
    const throughOneRow = (Number(queen.row) + 2).toString();
    const nextCol = (Number(queen.col) - 1).toString();
    const throughOneCol = (Number(queen.col) - 2).toString();
    const nextCell = getObjectByCoordinate(allChecker, nextRow, nextCol);
    const beUnableKill = queen?.color && (nextCell?.color === queen?.color || nextRow >= 8 || nextCol <= 1);

    if (beUnableKill) {
        return idDownLeft;
    }

    if (nextCell) {
        const throughOneCell = getObjectByCoordinate(allChecker, throughOneRow, throughOneCol);
        if (!throughOneCell) {
            return nextCell.id;
        }

        return idDownLeft;
    }

    const newQueen = { ...queen, row: nextRow, col: nextCol };

    return checkQueenDownLeft(newQueen, allChecker);
}

/* --- */

const checkQueenUpRight = (queen, allChecker) => {
    let idUpRight = null;
    const nextRow = (Number(queen.row) - 1).toString();
    const throughOneRow = (Number(queen.row) - 2).toString();
    const nextCol = (Number(queen.col) + 1).toString();
    const throughOneCol = (Number(queen.col) + 2).toString();
    const nextCell = getObjectByCoordinate(allChecker, nextRow, nextCol);
    const beUnableKill = queen?.color && (nextCell?.color === queen?.color || nextRow <= 1 || nextCol >= 8);

    if (beUnableKill) {
        return idUpRight;
    }

    if (nextCell) {
        const throughOneCell = getObjectByCoordinate(allChecker, throughOneRow, throughOneCol);
        if (!throughOneCell) {
            return nextCell.id;
        }

        return idUpRight;
    }

    const newQueen = { ...queen, row: nextRow, col: nextCol };

    return checkQueenUpRight(newQueen, allChecker);
}

/* --- */

const checkQueenUpLeft = (queen, allChecker) => {
    let idUpLeft = null;
    const nextRow = (Number(queen.row) - 1).toString();
    const throughOneRow = (Number(queen.row) - 2).toString();
    const nextCol = (Number(queen.col) - 1).toString();
    const throughOneCol = (Number(queen.col) - 2).toString();
    const nextCell = getObjectByCoordinate(allChecker, nextRow, nextCol);
    const beUnableKill = queen?.color && (nextCell?.color === queen?.color || nextRow <= 1 || nextCol <= 1);

    if (beUnableKill) {
        return idUpLeft;
    }

    if (nextCell) {
        const throughOneCell = getObjectByCoordinate(allChecker, throughOneRow, throughOneCol);
        if (!throughOneCell) {
            return nextCell.id;
        }

        return idUpLeft;
    }

    const newQueen = { ...queen, row: nextRow, col: nextCol };

    return checkQueenUpLeft(newQueen, allChecker);
}

export {
    checkQueenDownRight,
    checkQueenDownLeft,
    checkQueenUpRight,
    checkQueenUpLeft
}