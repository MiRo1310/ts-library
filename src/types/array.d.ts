declare global {
  interface Array<T> {
    /** Gets the first element of the array. */
    mrFirst(): T | undefined;
    /** Gets the last element of the array. */
    mrLast(): T | undefined;
    /** Gets the nth element of the array. */
    mrNth(n: number): T | undefined;
    /** Removes duplicate primitive values from the array. */
    mrRemoveDuplicates(this: Primitive[]): Primitive[];
    /** Trims whitespace from string elements in the array. */
    mrTrimItems(this: Primitive[]): Primitive[];
    /** Sums up the numeric elements in the array. */
    mrSum(this: number[]): number;
    /** Calculates the average of the numeric elements in the array. */
    mrAverage(this: number[]): number;
    /** Finds the minimum numeric value in the array. */
    mrMin(this: number[]): number | undefined;
    /** Finds the maximum numeric value in the array. */
    mrMax(this: number[]): number | undefined;
  }
}

export type Primitive = string | number | boolean;
export {};
