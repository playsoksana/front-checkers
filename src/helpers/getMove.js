import { CHECKER_COLOR } from "../Types/Checker";

const getMove = (step, currentChecker) => {
    if (!currentChecker) {
        return false;
    }

    return currentChecker.color === CHECKER_COLOR.dark && step % 2 === 0 || currentChecker.color === CHECKER_COLOR.white && step % 2 === 1;
}

export default getMove;