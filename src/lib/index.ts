export const isTruthy = (value: any): boolean => isDefined(value) && ["1", 1, true, "true"].includes(value);

export const isFalsy = (value: any): boolean => ["0", 0, false, "false", undefined, null].includes(value);

export const isDefined = <T>(value: T | undefined | null): value is T => value !== undefined && value !== null;

export const deepCopy = <T>(obj: T, errorHandler?:(e:any)=>void): T | undefined => {
  try {
    return !isDefined(obj) ? undefined : JSON.parse(JSON.stringify(obj));
  } catch (err) {
    if (errorHandler){
    errorHandler(err);
      return;
    }
    // eslint-disable-next-line no-console
      console.error(err);
  }
};