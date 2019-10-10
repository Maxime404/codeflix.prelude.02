module.exports = function union(...arrays) {

    unionAr = [];
    for (ar of arrays) {
        ar.forEach(element => {
            unionAr.push(element);
        });
    }
    return unionAr;
}