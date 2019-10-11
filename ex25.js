module.exports = function isMatch(object, properties) {

    let bool = false;
    const propertiesAr = Object.entries(properties);

    for (property of propertiesAr) {
        const [propertyKey, propertyValue] = property;
        if (object.hasOwnProperty(propertyKey) && object[propertyKey] === propertyValue) {
            bool = true;
        }
    }

    return bool;
}