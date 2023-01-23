import { CHECKER_COLOR } from "../Types/Checker";

const makeQueen = (arr, currentChecker) => {

    if ((currentChecker.color === CHECKER_COLOR.white
        && currentChecker.row === "8")
        || (currentChecker.color === CHECKER_COLOR.dark
            && currentChecker.row === "1")) {
        return arr.map(e => {
            if (e.id === currentChecker.id) {
                e.queen = true;
            }

            return e;
        })
    }

    return arr;
}

export default makeQueen;