import { SET_CHECKER, RESET_CHECKER } from "./types";

import { INITIAL_CHECKERS } from "../../Types/Checker";

const initial = [...INITIAL_CHECKERS];

export default (state = initial, { type, payloud }) => {
    switch (type) {
        case SET_CHECKER:
            return payloud;

        case RESET_CHECKER:
            return INITIAL_CHECKERS;

        default:
            return state
    }
};