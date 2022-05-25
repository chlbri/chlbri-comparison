"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isClassWithCompare = exports.isFunction = exports.isPrimitive = exports.isBigInt = exports.isBoolean = exports.isString = exports.isNumber = exports.isObject = exports.isNullish = exports.isArray = void 0;
function isArray(value) {
    return value instanceof Array;
}
exports.isArray = isArray;
function isNullish(value) {
    return value === null || value === undefined;
}
exports.isNullish = isNullish;
function isObject(...args) {
    return args.every(arg => typeof arg === 'object');
}
exports.isObject = isObject;
function isNumber(...args) {
    return args.every(arg => typeof arg === 'number');
}
exports.isNumber = isNumber;
function isString(...args) {
    return args.every(arg => typeof arg === 'string');
}
exports.isString = isString;
function isBoolean(...args) {
    return args.every(arg => typeof arg === 'boolean');
}
exports.isBoolean = isBoolean;
function isBigInt(...args) {
    return args.every(arg => typeof arg === 'bigint');
}
exports.isBigInt = isBigInt;
function isPrimitive(...args) {
    return args.every(arg => {
        return (isNumber(arg) || isString(arg) || isBoolean(arg) || isBigInt(arg));
    });
}
exports.isPrimitive = isPrimitive;
function isFunction(...args) {
    return args.every(arg => typeof arg === 'function');
}
exports.isFunction = isFunction;
function isClassWithCompare(...args) {
    return args.every(arg => typeof arg === 'function');
}
exports.isClassWithCompare = isClassWithCompare;
console.log('isArray', isArray.toString());
