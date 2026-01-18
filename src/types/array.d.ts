declare global {
  interface Array {
    /** Gets the first element of the array. */
    mrFirst: MrFirst;
    /** Gets the last element of the array. */
    mrLast: MrLast;
    /** Gets the nth element of the array. */
    mrNth: MrNth;
    /** Removes duplicate primitive values from the array. */
    mrRemoveDuplicates: MrRemoveDuplicates;
    /** Trims whitespace from string elements in the array. */
    mrTrimItems: MrTrimItems;
    /** Sums up the numeric elements in the array. */
    mrSum: MrSum;
    /** Calculates the average of the numeric elements in the array. */
    mrAverage: MrAverage;
    /** Finds the minimum numeric value in the array. */
    mrMin: MrMin;
    /** Finds the maximum numeric value in the array. */
    mrMax: MrMax;
  }
}

export type MrFirst = <T>(this: T[]) => T | undefined;
export type MrLast = <T>(this: T[]) => T | undefined;
export type MrNth = <T>(this: T[], n: number) => T | undefined;
export type MrRemoveDuplicates = (this: Primitive[]) => Primitive[];
export type MrTrimItems = (this: Primitive[]) => Primitive[];
export type MrSum = (this: number[]) => number;
export type MrAverage = (this: number[]) => number;
export type MrMin = (this: number[]) => number | undefined;
export type MrMax = (this: number[]) => number | undefined;

export type Primitive = string | number | boolean;
export {};
