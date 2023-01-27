const CHECKER_COLOR = {
    white: "White",
    dark: "Dark",
}

const INITIAL_CHECKERS = [
    { id: '1', color: 'White', row: '1', col: '2', queen: true, },
    { id: '3', color: 'White', row: '1', col: '4', queen: true, },
    { id: '5', color: 'White', row: '1', col: '6', queen: true, },
    { id: '7', color: 'White', row: '1', col: '8', queen: true, },
    { id: '8', color: 'White', row: '2', col: '1', queen: true, },
    { id: '10', color: 'White', row: '2', col: '3', queen: true, },
    { id: '12', color: 'White', row: '2', col: '5', queen: true, },
    { id: '14', color: 'White', row: '2', col: '7', queen: true, },
    { id: '17', color: 'White', row: '3', col: '2', queen: true, },
    { id: '19', color: 'White', row: '3', col: '4', queen: true, },
    { id: '21', color: 'White', row: '3', col: '6', queen: true, },
    { id: '23', color: 'White', row: '3', col: '8', queen: true, },
    { id: '40', color: 'Dark', row: '6', col: '1', queen: true, },
    { id: '42', color: 'Dark', row: '6', col: '3', queen: true, },
    { id: '44', color: 'Dark', row: '6', col: '5', queen: true, },
    { id: '46', color: 'Dark', row: '6', col: '7', queen: true, },
    { id: '49', color: 'Dark', row: '7', col: '2', queen: true, },
    { id: '51', color: 'Dark', row: '7', col: '4', queen: true, },
    { id: '53', color: 'Dark', row: '7', col: '6', queen: true, },
    { id: '55', color: 'Dark', row: '7', col: '8', queen: true, },
    { id: '56', color: 'Dark', row: '8', col: '1', queen: true, },
    { id: '58', color: 'Dark', row: '8', col: '3', queen: true, },
    { id: '60', color: 'Dark', row: '8', col: '5', queen: true, },
    { id: '62', color: 'Dark', row: '8', col: '7', queen: false, },
];

export {
    CHECKER_COLOR,
    INITIAL_CHECKERS,
}