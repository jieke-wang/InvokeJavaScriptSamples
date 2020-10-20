var build_array = function (callback) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var result = [];
    args.forEach(function (arg) {
        result.push(arg);
    });
    callback(null, result);
};
var merge_object = function (callback) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var result = {};
    args.forEach(function (arg) {
        Object.assign(result, arg);
    });
    callback(null, result);
};
module.exports = {
    build_array: build_array,
    merge_object: merge_object
};
//# sourceMappingURL=build_object.js.map