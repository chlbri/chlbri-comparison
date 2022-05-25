import { UND } from './constants';
import { isArray, isNullish, isObject } from './helpers';
import { Compare } from './types';

function _maybeCompareArray(array1?: unknown[], array2?: unknown[]) {
  if (isNullish(array2) || isNullish(array1)) {
    return true;
  }
  if (array2.length > array1.length) return false;
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

function _reduce(obj: object, ...keys: string[]) {
  return Object.entries({ ...obj })
    .filter(([key]) => {
      const len = keys.length;
      const check = len > 0;
      return check ? keys.includes(key) : true;
    })
    .filter(([, value]) => !isNullish(value))
    .reduce((prev, [key, value]) => {
      prev[key] = value;
      return prev;
    }, {} as any);
}

function _maybeCompare(arg1: any, arg2: any): boolean {
  if (isNullish(arg2)) return true;

  if (arg2 === UND) {
    return arg1 === undefined;
  }

  //TODO: Test functions

  if (!isObject(arg1, arg2)) {
    return arg1 === arg2;
  }

  if (isArray(arg1)) {
    return _maybeCompareArray(arg1, arg2);
  }

  if (isArray(arg2)) {
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
      const check =
        (isArray(el2) && isArray(el1)) ||
        isObject(el1, el2) ||
        el2 === UND;

      if (check) {
        if (!_maybeCompare(el1, el2)) {
          return false;
        }
      } else {
        return el1 === el2;
      }
    }
  }
  return true;
}

export function maybeCompare<T = any>(
  ...[processed, expected]: Parameters<Compare<T>>
): ReturnType<Compare<T>> {
  return _maybeCompare(processed, expected);
}

export function deepCompare<T = any>(
  ...[processed, expected]: Parameters<Compare<T>>
): ReturnType<Compare<T>> {
  return JSON.stringify(processed) === JSON.stringify(expected);
}

//TODO: Test functions
