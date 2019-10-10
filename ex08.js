module.exports = function intersection(...arrays) {

    let array = [];
    const [refAr, ...rest] = arrays;
    for (i in refAr) {
        let bool = true;
        for (ar of rest) {
            if (!ar.includes(refAr[i])) { bool = false }
        }
        if (bool) { array.push(refAr[i]) }
    }
    return array;
}