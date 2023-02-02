import { SET_CHECKER, RESET_CHECKER } from "./types";

const setAllChecker = (payloud) => ({
    type: SET_CHECKER,
    payloud,
});

const resetChecker = (payloud) => ({
    type: RESET_CHECKER,
    payloud,
});

export {
    setAllChecker,
    resetChecker
}