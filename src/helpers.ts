export function isArray<T>(value: unknown): value is Array<T> {
  return value instanceof Array;
}

export function isNullish(value: unknown): value is undefined | null {
  return value === null || value === undefined;
}

export function isObject(...args: unknown[]): boolean {
  return args.every(arg => typeof arg === 'object');
}

export function isNumber(...args: unknown[]): boolean {
  return args.every(arg => typeof arg === 'number');
}

export function isString(...args: unknown[]): boolean {
  return args.every(arg => typeof arg === 'string');
}

export function isBoolean(...args: unknown[]): boolean {
  return args.every(arg => typeof arg === 'boolean');
}

export function isBigInt(...args: unknown[]): boolean {
  return args.every(arg => typeof arg === 'bigint');
}

export function isPrimitive(...args: unknown[]): boolean {
  return args.every(arg => {
    return (
      isNumber(arg) || isString(arg) || isBoolean(arg) || isBigInt(arg)
    );
  });
}

export function isFunction(...args: unknown[]): boolean {
  return args.every(arg => typeof arg === 'function');
}

export function isClassWithCompare(...args: unknown[]): boolean {
  return args.every(arg => typeof arg === 'function');
}

console.log('isArray', isArray.toString());
