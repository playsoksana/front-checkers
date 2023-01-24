import checkerCanMoveByOrder from "./checker-can-move-by-order";

const checkerCanMoveByColor = (evt, orderOfStep, currentChecker) => {

    const canMoveByColor = checkerCanMoveByOrder(orderOfStep, currentChecker);

    if (!canMoveByColor || evt.target.getAttribute("data-dark") === "false") {
        return false;
    }

    if (!evt.target.getAttribute("data-column") || !evt.target.getAttribute("data-row")) {
        return false;
    }

    return true;
}

export default checkerCanMoveByColor;