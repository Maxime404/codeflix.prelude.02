module.exports = function values(object) {

    let array = [];
    
    for (const [key, value] of Object.entries(object)) {
        array.push(value);
    }
    return array;
}