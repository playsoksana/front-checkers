import { SET_CHECKER } from "./types";

import { INITIAL_CHECKERS } from "../Types/Checker";

const initialState = INITIAL_CHECKERS


function allChecker(state = initialState, { type, payloud }) {
    switch (type) {
        case SET_CHECKER:
            return payloud

        default:
            return state
    }
};

export default allChecker;