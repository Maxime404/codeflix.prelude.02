module.exports = function without(array, ...opt) {

    for (i in array) {
        for (optValues of opt) {
            if (array[i] === optValues) { array.splice(i, 1) }
        }
    }
    return array;
}