import getMove from "./getMove";

const canMoveByColor = (evt, orderOfStep, currentChecker) => {

    const isCanMoveByColor = getMove(orderOfStep, currentChecker);

    if (!isCanMoveByColor || evt.target.getAttribute("data-dark") === "false") {
        return false;
    }

    if (!evt.target.getAttribute("data-column") || !evt.target.getAttribute("data-row")) {
        return false;
    }

    return true;
}

export default canMoveByColor;