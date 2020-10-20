module.exports = function (callback, name) {
    var result = `Hello ${name}`;
    callback(null, result);
}