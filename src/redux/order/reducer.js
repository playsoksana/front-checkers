import { SET_ORDER, RESET_ORDER } from "./types";

export default (state = 1, { type, payloud }) => {
    console.log(type);
    switch (type) {
        case SET_ORDER:

            return state + 1;

        case RESET_ORDER:
            return 1;

        default:
            return state
    }
};