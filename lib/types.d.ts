import { UND } from './constants';
export declare type Primitive = string | number | boolean | undefined | null;
export declare type Expected<T> = DeepPartial<T> | DeepExpected<T>;
export declare type DeepPartial<T> = T extends Primitive ? T : {
    [P in keyof T]?: DeepPartial<T[P]>;
};
declare type Und = typeof UND;
export declare type DeepExpected<T> = DeepPartial<T extends {
    [key: string]: infer U;
} ? U extends Primitive ? U | Und : DeepExpected<U> : Record<string, never> | Und> | Partial<Record<keyof T, Und>>;
export declare type Compare<T = any> = (arg1: T, arg2?: Expected<T>) => boolean;
export {};
