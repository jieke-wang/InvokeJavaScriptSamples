import * as math from "mathjs/dist/math"

var run_demo: any = (callback: (error: any, result: any) => void) => {
    var result: Array<any> = [];

    result.push(`math.e = ${math.e}`);
    result.push(`math.round(math.e, 3) = ${math.round(math.e, 3)}`);
    result.push(`math.atan2(3, -3) / math.pi = ${math.atan2(3, -3) / math.pi}`);
    result.push(`math.log(10000, 10) = ${math.log(10000, 10)}`);
    result.push(`math.sqrt(-4) = ${math.sqrt(-4)}`);
    result.push(`math.pow([[-1, 2], [3, 1]], 2) = ${math.pow([[-1, 2], [3, 1]], 2)}`);
    result.push(`math.derivative('x^2 + x', 'x') = ${math.derivative('x^2 + x', 'x')}`);

    result.push(`math.evaluate('12 / (2.3 + 0.7)') = ${math.evaluate('12 / (2.3 + 0.7)')}`);
    result.push(`math.evaluate('12.7 cm to inch') = ${math.evaluate('12.7 cm to inch')}`);
    result.push(`math.evaluate('9 / 3 + 2i') = ${math.evaluate('9 / 3 + 2i')}`);
    result.push(`math.evaluate('det([-1, 2; 3, 1])') = ${math.evaluate('det([-1, 2; 3, 1])')}`);

    var a = math.chain(3)
        .add(4)
        .multiply(2)
        .done();
    result.push(`var a = math.chain(3).add(4).multiply(2).done(); => ${a}`);

    result.push(`math.format(math.pi, 6) = ${math.format(math.pi, 14)}`);

    callback(null, result);
};

declare var module: any;
module.exports = {
    run_demo
};