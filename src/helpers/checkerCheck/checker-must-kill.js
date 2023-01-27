import { getObjectByCoordinate } from '../../lib/array.js';

const checkCheckerDownRight = (checker, allChecker) => {
    const nextRow = (Number(checker.row) + 1).toString();
    const throughOneRow = (Number(checker.row) + 2).toString();
    const nextCol = (Number(checker.col) + 1).toString();
    const throughOneCol = (Number(checker.col) + 2).toString();
    const nextCell = getObjectByCoordinate(allChecker, nextRow, nextCol);
    const beUnableKill = checker.color && (nextCell?.color === checker?.color || nextRow >= 8 || nextCol >= 8);
    const throughOneCell = getObjectByCoordinate(allChecker, throughOneRow, throughOneCol);

    if ((beUnableKill || !nextCell) || (nextCell && throughOneCell)) {
        return null;
    }

    return nextCell.id;
}

/* --- */

const checkCheckerDownLeft = (checker, allChecker) => {
    const nextRow = (Number(checker.row) + 1).toString();
    const throughOneRow = (Number(checker.row) + 2).toString();
    const nextCol = (Number(checker.col) - 1).toString();
    const throughOneCol = (Number(checker.col) - 2).toString();
    const nextCell = getObjectByCoordinate(allChecker, nextRow, nextCol);
    const beUnableKill = checker.color && (nextCell?.color === checker?.color || nextRow >= 8 || nextCol <= 1);
    const throughOneCell = getObjectByCoordinate(allChecker, throughOneRow, throughOneCol);

    if ((beUnableKill || !nextCell) || (nextCell && throughOneCell)) {
        return null;
    }

    return nextCell.id;
}

/* --- */

const checkCheckerUpRight = (checker, allChecker) => {
    const nextRow = (Number(checker.row) - 1).toString();
    const throughOneRow = (Number(checker.row) - 2).toString();
    const nextCol = (Number(checker.col) + 1).toString();
    const throughOneCol = (Number(checker.col) + 2).toString();
    const nextCell = getObjectByCoordinate(allChecker, nextRow, nextCol);
    const beUnableKill = checker.color && (nextCell?.color === checker?.color || nextRow <= 1 || nextCol >= 8);
    const throughOneCell = getObjectByCoordinate(allChecker, throughOneRow, throughOneCol);

    if ((beUnableKill || !nextCell) || (nextCell && throughOneCell)) {
        return null;
    }

    return nextCell.id;
}

/* --- */

const checkCheckerUpLeft = (checker, allChecker) => {
    const nextRow = (Number(checker.row) - 1).toString();
    const throughOneRow = (Number(checker.row) - 2).toString();
    const nextCol = (Number(checker.col) - 1).toString();
    const throughOneCol = (Number(checker.col) - 2).toString();
    const nextCell = getObjectByCoordinate(allChecker, nextRow, nextCol);
    const beUnableKill = checker.color && (nextCell?.color === checker?.color || nextRow <= 1 || nextCol <= 1);
    const throughOneCell = getObjectByCoordinate(allChecker, throughOneRow, throughOneCol);

    if ((beUnableKill || !nextCell) || (nextCell && throughOneCell)) {
        return null;
    }

    return nextCell.id;
}

export {
    checkCheckerDownRight,
    checkCheckerDownLeft,
    checkCheckerUpRight,
    checkCheckerUpLeft
}