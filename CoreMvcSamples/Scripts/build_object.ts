var build_array: any = (callback: (error: any, result: any) => void, ...args) => {
    var result: Array<any> = [];
    args.forEach(arg => {
        result.push(arg);
    });
    callback(null, result);
};

var merge_object: any = (callback: (error: any, result: any) => void, ...args) => {
    var result: any = {};
    args.forEach(arg => {
        Object.assign(result, arg);
    });
    callback(null, result);
};

declare var module: any;
module.exports = {
    build_array,
    merge_object
};