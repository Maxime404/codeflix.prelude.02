module.exports = function difference(array, ...others) {

    let difAr = [];
    
    for (i in array) {
        let bool = true;
        for (ar of others) {
            if (ar.includes(array[i])) { bool = false }
        }
        if (bool) { difAr.push(array[i]) }
    }
    return difAr;
}