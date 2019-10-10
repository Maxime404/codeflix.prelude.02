module.exports = function intersection(...arrays) {

    let array = [];
    const [refAr, ...rest] = arrays;
    for (i in refAr) {
        for (ar of rest) {
            if (!rest.includes(refAr[i])) {
                break;
            }
        }
        array.push(refAr[i]);
    }
    return array;
}