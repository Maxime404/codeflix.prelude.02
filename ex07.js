module.exports = function union(...arrays) {

    unionAr = [];
    for (ar of arrays) {
        ar.forEach(element => {
            //if (!unionAr.includes(element)) { unionAr.push(element) };
            unionAr.push(element);
        });
    }
    return unionAr;
}