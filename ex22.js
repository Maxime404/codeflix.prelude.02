module.exports = function pluck(list, propertyName) {

    const newAr = [];
    const objAr = Object.values(list);

    for (const arr of objAr) {
        for (const [objKey, objVal] of Object.entries(arr)) {
            if (objKey === propertyName) { newAr.push(objVal) }
        }
    }

    return newAr;
}