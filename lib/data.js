"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepCompare = exports.maybeCompare = void 0;
const constants_1 = require("./constants");
const helpers_1 = require("./helpers");
function _maybeCompareArray(array1, array2) {
    if ((0, helpers_1.isNullish)(array2) || (0, helpers_1.isNullish)(array1)) {
        return true;
    }
    if (array2.length > array1.length)
        return false;
    let out = true;
    for (let index = 0; index < array2.length; index++) {
        const el1 = array1[index];
        const el2 = array2[index];
        out = _maybeCompare(el1, el2);
        if (!out) {
            break;
        }
    }
    return out;
}
function _reduce(obj, ...keys) {
    return Object.entries({ ...obj })
        .filter(([key]) => {
        const len = keys.length;
        const check = len > 0;
        return check ? keys.includes(key) : true;
    })
        .filter(([, value]) => !(0, helpers_1.isNullish)(value))
        .reduce((prev, [key, value]) => {
        prev[key] = value;
        return prev;
    }, {});
}
function _maybeCompare(arg1, arg2) {
    if ((0, helpers_1.isNullish)(arg2))
        return true;
    if (arg2 === constants_1.UND) {
        return arg1 === undefined;
    }
    //TODO: Test functions
    if (!(0, helpers_1.isObject)(arg1, arg2)) {
        return arg1 === arg2;
    }
    if ((0, helpers_1.isArray)(arg1)) {
        return _maybeCompareArray(arg1, arg2);
    }
    if ((0, helpers_1.isArray)(arg2)) {
        return _maybeCompareArray(arg1, arg2);
    }
    const _arg2 = _reduce(arg2);
    const keys2 = Object.keys(_arg2);
    if (!keys2.length) {
        return true;
    }
    const _arg1 = _reduce(arg1, ...keys2);
    for (const key in _arg2) {
        if (Object.prototype.hasOwnProperty.call(_arg2, key)) {
            const el1 = _arg1[key];
            const el2 = _arg2[key];
            const check = ((0, helpers_1.isArray)(el2) && (0, helpers_1.isArray)(el1)) ||
                (0, helpers_1.isObject)(el1, el2) ||
                el2 === constants_1.UND;
            if (check) {
                if (!_maybeCompare(el1, el2)) {
                    return false;
                }
            }
            else {
                return el1 === el2;
            }
        }
    }
    return true;
}
function maybeCompare(...[processed, expected]) {
    return _maybeCompare(processed, expected);
}
exports.maybeCompare = maybeCompare;
function deepCompare(...[processed, expected]) {
    return JSON.stringify(processed) === JSON.stringify(expected);
}
exports.deepCompare = deepCompare;
//TODO: Test functions
