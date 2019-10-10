module.exports = function first(array, n = 1) {
    
    return (n === 1) ? array[0] : array.slice(0, n);
}