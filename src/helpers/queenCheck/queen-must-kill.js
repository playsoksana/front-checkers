import { getObjectByCoordinate } from '../../lib/array.js';

const checkDownRight = (queen, allChecker) => {
    let idDownRight = null;
    const nextRow = (Number(queen.row) + 1).toString();
    const throughOneRow = (Number(queen.row) + 2).toString();
    const nextCol = (Number(queen.col) + 1).toString();
    const throughOneCol = (Number(queen.col) + 2).toString();
    const nextCell = getObjectByCoordinate(allChecker, nextRow, nextCol);
    const beUnableKill = queen?.color && (nextCell?.color === queen?.color || nextRow >= 8 || nextCol >= 8);

    if (beUnableKill) {
        return idDownRight;
    }

    if (nextCell) {
        const throughOneCell = getObjectByCoordinate(allChecker, throughOneRow, throughOneCol);
        if (!throughOneCell) {
            return nextCell.id;
        }

        return idDownRight;
    }

    const newQueen = { ...queen, row: nextRow, col: nextCol };

    return checkDownRight(newQueen, allChecker);
}

/* --- */

const checkDownLeft = (queen, allChecker) => {
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

    return checkDownLeft(newQueen, allChecker);
}

/* --- */

const checkUpRight = (queen, allChecker) => {
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

    return checkUpRight(newQueen, allChecker);
}

/* --- */

const checkUpLeft = (queen, allChecker) => {
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

    return checkUpLeft(newQueen, allChecker);
}

export {
    checkDownRight,
    checkDownLeft,
    checkUpRight,
    checkUpLeft
}