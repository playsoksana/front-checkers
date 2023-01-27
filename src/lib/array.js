const getObjectByCoordinate = (arr, row, col) => {
    return arr.find(e => {
        return (e.row === row && e.col === col)
    });
}

export {
    getObjectByCoordinate,
}