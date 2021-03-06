export declare function isArray<T>(value: unknown): value is Array<T>;
export declare function isNullish(value: unknown): value is undefined | null;
export declare function isObject(...args: unknown[]): boolean;
export declare function isNumber(...args: unknown[]): boolean;
export declare function isString(...args: unknown[]): boolean;
export declare function isBoolean(...args: unknown[]): boolean;
export declare function isBigInt(...args: unknown[]): boolean;
export declare function isPrimitive(...args: unknown[]): boolean;
export declare function isFunction(...args: unknown[]): boolean;
export declare function isClassWithCompare(...args: unknown[]): boolean;
