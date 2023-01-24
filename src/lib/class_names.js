const classNames = (names = {}) => {
    const ret = [];

    Object.keys(names).forEach((className) => {
        if (names[className]) {
            ret.push(className);
        }
    });

    return ret.join(" ");
};

export default classNames;
