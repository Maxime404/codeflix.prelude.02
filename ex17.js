module.exports = function omit(object, ...keys) {

    const newObj = {};
    const [callback] = keys;
    const objAr = Object.entries(object);

    (typeof callback === 'function') ? func() : other();

    function func() {
        for (const item of objAr) {
            const [key, value] = item;
            if (!callback(value, key, object)) {
                newObj[key] = object[key];
            }
        }
    }

    function other() {
        for (const [objKey, value] of objAr) {
            let bool = true;
            for (const cbKey of keys) {
                if (objKey === cbKey) { bool = false }
            }
            if (bool) { newObj[objKey] = object[objKey]; }
        }
    }

    return newObj;
}