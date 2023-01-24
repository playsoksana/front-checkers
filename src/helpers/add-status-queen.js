import { CHECKER_COLOR } from "../Types/Checker";

const addStatusQueen = (coordinateOfCheckeers, currentChecker) => {
    if ((currentChecker.color === CHECKER_COLOR.white
        && currentChecker.row === "8")
        || (currentChecker.color === CHECKER_COLOR.dark
            && currentChecker.row === "1")) {
        return coordinateOfCheckeers.map(coordinateOfCheckeer => {
            if (coordinateOfCheckeer.id === currentChecker.id) {
                coordinateOfCheckeer.queen = true;
            }

            return coordinateOfCheckeer;
        });
    }

    return coordinateOfCheckeers;
};

export default addStatusQueen;
