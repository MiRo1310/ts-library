declare global {
  interface Number {
    /** Pads a number with leading zeros to reach a specified length.
     * @param length The desired total length of the resulting string. Default is 2.
     */
    mrPad: MrPad;
  }
}

export type MrPad = (ThisType: number, length?: number) => string;

export {};
