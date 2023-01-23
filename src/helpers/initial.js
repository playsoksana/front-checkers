const getСoordinates = (i) => {
    let row = Math.floor(i / 8);
    let columnBoard = Math.floor(i - 8 * row + 1);
    return {
        rowBoard: row + 1, columnBoard
    };
};

const getDark = (i) => {
    if (Math.floor(i / 8) % 2 === 0) {
        return i % 2 !== 0;
    }
    return i % 2 === 0;
};

const isRanking = (i) => {
    return getDark(i) && getСoordinates(i).rowBoard !== 4 &&
        getСoordinates(i).rowBoard !== 5;
};

export { getСoordinates, getDark, isRanking };
