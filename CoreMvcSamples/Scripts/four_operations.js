var add = function (callback, x, y) {
    var result = x + y;
    callback(null, result);
};
var subtract = function (callback, x, y) {
    var result = x - y;
    callback(null, result);
};
var multiplicati = function (callback, x, y) {
    var result = x * y;
    callback(null, result);
};
var division = function (callback, x, y) {
    var result = NaN;
    if (y != 0) {
        result = x / y;
    }
    callback(null, result);
};
module.exports = {
    add: add,
    subtract: subtract,
    multiplicati: multiplicati,
    division: division
};
//# sourceMappingURL=four_operations.js.map