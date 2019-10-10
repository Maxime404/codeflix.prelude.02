module.exports = function last(array, n = 1) {
    
    return (n === 1) ? array[array.length] : array.slice(array.length - n, array.length);
}