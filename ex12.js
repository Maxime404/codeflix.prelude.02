module.exports = function keys(object) {

    //return Object.keys(object); //[ 'one', 'two', 'three' ]
    let array = [];
    
    for (const [key, value] of Object.entries(object)) {
        array.push(key);
    }

    //OR//////////////////////
    /*
    for (const item of Object.entries(object)) {
        const [key, value] = item;
        array.push(key);
    }
    */
    return array;
}