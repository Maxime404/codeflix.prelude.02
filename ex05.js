module.exports = function flatten(array, shallow) {

    return (shallow) ? flat() : flatDeep(array);


    function flat() {
        return array.reduce((acc, val) => acc.concat(val), []);
    }

    function flatDeep(array) {
        return array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val) : val), []);
    }
}