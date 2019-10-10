module.exports = function paires(object) {

    let array = [];
    
    for (const item of Object.entries(object)) {
        array.push(item);
    }
    return array;
}