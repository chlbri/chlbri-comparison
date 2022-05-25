"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareFunctions = void 0;
/**
 *
 * @param args (only defined functions, not arrow functions)
 * @returns true if all functions have the same shape.
 */
function compareFunctions(...args) {
    const first = mapper(args[0]);
    return args.map(mapper).every(arg => arg === first);
}
exports.compareFunctions = compareFunctions;
function mapper(arg) {
    return arg.toString().replace(`function ${arg.name}`, '');
}
