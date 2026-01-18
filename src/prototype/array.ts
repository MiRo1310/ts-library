import "../types/array.d.ts";
import { MrAverage, MrFirst, MrLast, MrMax, MrMin, MrNth, MrRemoveDuplicates, MrSum, MrTrimItems, Primitive } from "../types/array";

const mrFirst: MrFirst = function <T>(this: T[]): T | undefined {
  return this[0];
};

const mrLast: MrLast = function <T>(this: T[]): T | undefined {
  return this[this.length - 1];
};

const mrNth: MrNth = function <T>(this: T[], n: number): T | undefined {
  return this[n];
};

const mrRemoveDuplicates: MrRemoveDuplicates = function (this: Primitive[]): Primitive[] {
  return this.filter((item, index) => this.indexOf(item) === index);
};

const mrTrimItems: MrTrimItems = function (this: Primitive[]): Primitive[] {
  return this.map((item) => (typeof item === "string" ? item.trim() : item));
};

const mrSum: MrSum = function (this: number[]): number {
  return this.reduce((acc, val) => acc + val, 0);
};

const mrAverage: MrAverage = function (this: number[]): number {
  if (this.length === 0) {
    return 0;
  }
  return this.mrSum() / this.length;
};

const mrMin: MrMin = function (this: number[]): number {
  return this.reduce((acc, val) => (val < acc ? val : acc), this[0]);
};

const mrMax: MrMax = function (this: number[]): number {
  return this.reduce((acc, val) => (val > acc ? val : acc), this[0]);
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const arrayPrototypeMethods: [string, Function][] = [
  ["mrFirst", mrFirst],
  ["mrLast", mrLast],
  ["mrNth", mrNth],
  ["mrRemoveDuplicates", mrRemoveDuplicates],
  ["mrTrimItems", mrTrimItems],
  ["mrSum", mrSum],
  ["mrAverage", mrAverage],
  ["mrMin", mrMin],
  ["mrMax", mrMax],
];

for (const [name, fn] of arrayPrototypeMethods) {
  // @ts-expect-error: Prototype-Erweiterung
  Array.prototype[name] = fn;
}
