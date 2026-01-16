interface Array<T> {
  /** Gets the first element of the array. */
  mrFirst(): T | undefined;
  /** Gets the last element of the array. */
  mrLast(): T | undefined;
  /** Gets the nth element of the array. */
  mrNth(n: number): T | undefined;
}
