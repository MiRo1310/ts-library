export declare const isTruthy: IsTruthy;
export declare const isFalsy: IsFalsy;
export declare const isDefined: IsDefined;
export declare const deepCopy: DeepCopy;
export declare const isString: IsString;

export type IsTruthy = (value: any) => boolean;
export type IsFalsy = (value: any) => boolean;
export type IsDefined = <T>(value: T | undefined | null) => value is T;
export type DeepCopy = <T>(obj: T, errorHandler?: (e: any) => void) => T | undefined;
export type IsString = (value: unknown) => value is string;
