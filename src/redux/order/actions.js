import { SET_ORDER, RESET_ORDER } from "./types";

const setOrder = (payloud) => ({
    type: SET_ORDER,
    payloud,
});

const resetOrder = (payloud) => ({
    type: RESET_ORDER,
    payloud,
});

export {
    setOrder,
    resetOrder,
};
