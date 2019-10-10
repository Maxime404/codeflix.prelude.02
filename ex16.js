module.exports = function pick(object, ...keys) {

    const newObj = {};
    const [callback] = keys;

    (typeof callback === 'function') ? func() : other();

    function func() {
        for (const item of Object.entries(object)) {
            const [key, value] = item;
            if (callback(value, key, object)) {
                newObj[key] = object[key];
            }
        }
    }

    function other() {
        for (const key of keys) {
            if (object[key]) {
                newObj[key] = object[key];
            }
        }
    }

    return newObj;
}