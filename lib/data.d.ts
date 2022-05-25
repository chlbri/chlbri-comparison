import { Compare } from './types';
export declare function maybeCompare<T = any>(...[processed, expected]: Parameters<Compare<T>>): ReturnType<Compare<T>>;
export declare function deepCompare<T = any>(...[processed, expected]: Parameters<Compare<T>>): ReturnType<Compare<T>>;
