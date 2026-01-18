import { DeepCopy, IsDefined, IsFalsy, IsString, IsTruthy } from "../types/lib";

export const isTruthy: IsTruthy = (value: any): boolean => isDefined(value) && ["1", 1, true, "true"].includes(value);

export const isFalsy: IsFalsy = (value: any): boolean => ["0", 0, false, "false", undefined, null].includes(value);

export const isDefined: IsDefined = <T>(value: T | undefined | null): value is T => value !== undefined && value !== null;

export const deepCopy: DeepCopy = <T>(value: T, errorHandler?: (e: any) => void): T | undefined => {
  try {
    return !isDefined(value) ? undefined : JSON.parse(JSON.stringify(value));
  } catch (err) {
    if (errorHandler) {
      errorHandler(err);
      return;
    }
    // eslint-disable-next-line no-console
    console.error(err);
  }
};

export const isString: IsString = (value: unknown): value is string => typeof value === "string";
