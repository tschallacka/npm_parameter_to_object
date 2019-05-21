module.exports = function(name, value) {
    if (value === undefined) value = '';
    if (typeof value == 'object') return value;

    try {
        return JSON.parse(JSON.stringify(eval("({" + value + "})")));
    }
    catch (e) {
        throw new Error('Error parsing the '+name+' attribute value. '+e);
    }
}