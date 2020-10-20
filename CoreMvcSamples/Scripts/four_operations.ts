var add: any = (callback: (error: any, result: any) => void, x: any, y: any) => {
    var result: any = x + y;
    callback(null, result);
};

var subtract: any = (callback: (error: any, result: any) => void, x: any, y: any) => {
    var result: any = x - y;
    callback(null, result);
};

var multiplicati: any = (callback: (error: any, result: any) => void, x: any, y: any) => {
    var result: any = x * y;
    callback(null, result);
};

var division: any = (callback: (error: any, result: any) => void, x: any, y: any) => {
    var result: any = NaN;
    if (y != 0) {
        result = x / y;
    }
    callback(null, result);
};

declare var module: any;
module.exports = {
    add,
    subtract,
    multiplicati,
    division
}