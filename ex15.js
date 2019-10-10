module.exports = function invert(object) {

    let newObj = {};
    let objAr = Object.entries(object);
    
    for (const item of objAr) {
        const [key, value] = item;
        newObj[value] = key;
    }
    return newObj;
}