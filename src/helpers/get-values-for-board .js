const getCoordinateForChecker = (i) => {
    let row = Math.floor(i / 8);
    let col = Math.floor(i - 8 * row + 1);
    return {
        row: row + 1, col
    };
};

export { getCoordinateForChecker };
