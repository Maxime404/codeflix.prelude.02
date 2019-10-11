module.exports = function map(list, iterateCb) {

    const newAr = [];
    const objAr = Object.entries(list);

    for (const [objKey, objVal] of objAr) {
        newAr.push(iterateCb(objVal));
    }
    return newAr;
}