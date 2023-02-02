import {
    checkQueenDownRight,
    checkQueenDownLeft,
    checkQueenUpRight,
    checkQueenUpLeft
} from "./queenCheck/queen-must-kill";

import {
    checkCheckerDownRight,
    checkCheckerDownLeft,
    checkCheckerUpRight,
    checkCheckerUpLeft
} from "./checkerCheck/checker-must-kill";

const checkersMustKill = (allChecker, currentChecker) => {
    const result = {};

    const checkerWhoMustKill = [];
    const checkerThatPossibleKill = [];

    const selectedColor = currentChecker?.color;
    const checkerByColor = (allChecker || []).filter(e => e.color === selectedColor);


    for (let i = 0; i < checkerByColor.length; i++) {
        const checker = checkerByColor[i];

        if (checker.queen) {
            const idDownRight = checkQueenDownRight(checker, allChecker);
            if (idDownRight) {
                checkerWhoMustKill.push(checker.id);
                checkerThatPossibleKill.push(idDownRight);
            }

            const idDownLeft = checkQueenDownLeft(checker, allChecker);
            if (idDownLeft) {
                checkerWhoMustKill.push(checker.id);
                checkerThatPossibleKill.push(idDownLeft);
            }

            const idUpRight = checkQueenUpRight(checker, allChecker);
            if (idUpRight) {
                checkerWhoMustKill.push(checker.id);
                checkerThatPossibleKill.push(idUpRight);
            }

            const idUpLeft = checkQueenUpLeft(checker, allChecker);
            if (idUpLeft) {
                checkerWhoMustKill.push(checker.id);
                checkerThatPossibleKill.push(idUpLeft);
            }

        } else {

            const idDownRight = checkCheckerDownLeft(checker, allChecker);
            if (idDownRight) {
                checkerWhoMustKill.push(checker.id);
                checkerThatPossibleKill.push(idDownRight);
            }

            const idDownLeft = checkCheckerDownRight(checker, allChecker);
            if (idDownLeft) {
                checkerWhoMustKill.push(checker.id);
                checkerThatPossibleKill.push(idDownLeft);
            }

            const idUpRight = checkCheckerUpRight(checker, allChecker);
            if (idUpRight) {
                checkerWhoMustKill.push(checker.id);
                checkerThatPossibleKill.push(idUpRight);
            }

            const idUpLeft = checkCheckerUpLeft(checker, allChecker);
            if (idUpLeft) {
                checkerWhoMustKill.push(checker.id);
                checkerThatPossibleKill.push(idUpLeft);
            }
        }
    }

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