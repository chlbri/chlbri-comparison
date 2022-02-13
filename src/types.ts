export type Primitive = string | number | boolean | undefined | null;

export type Expected<T> = DeepPartial<T> | DeepExpected<T>;

export type DeepPartial<T> = T extends Primitive
  ? T
  : {[P in keyof T]?: DeepPartial<T[P]>};

export type DeepExpected<T> = DeepPartial<
  T extends {
    [key: string]: infer U;
  }
    ? U extends Primitive
      ? U
      : DeepExpected<U>
    : Record<string, never>
>;
export type Compare<T = any> = (arg1: T, arg2?: Expected<T>) => boolean;
