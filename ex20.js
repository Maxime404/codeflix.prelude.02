module.exports = function sample(list, n = 1) {

    let array = [];
    let nbMax = 0;

    for (const nb of list) {
        if (nbMax < nb) { nbMax = nb }
    }

    while (array.length < n) {
        const randomNb = Math.ceil(Math.random() * nbMax);
        for (i in list) {
            if (list[i] === randomNb && !array.includes(randomNb)) {
                array.push(randomNb);
            }
        }
    }
    return array;
}