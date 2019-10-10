module.exports = function has(object, key) {

    const newObj = {};
    const obj = Object.entries(object);
    let bool = false;

    for (const [objKey] of obj) {
        if (objKey === key) { bool = true }
    }

    return bool;
}