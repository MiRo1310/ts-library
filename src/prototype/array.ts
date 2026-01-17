import "../types/array.d.ts";
import { Primitive } from "../types/array";

Array.prototype.mrFirst = function <T>(this: T[]): T | undefined {
  return this[0];
};

Array.prototype.mrLast = function <T>(this: T[]): T | undefined {
  return this[this.length - 1];
};

Array.prototype.mrNth = function <T>(this: T[], n: number): T | undefined {
  return this[n];
};

Array.prototype.mrRemoveDuplicates = function (this: Primitive[]): Primitive[] {
  return this.filter((item, index) => this.indexOf(item) === index);
};

Array.prototype.mrTrimItems = function (this: Primitive[]): Primitive[] {
  return this.map((item) => (typeof item === "string" ? item.trim() : item));
};

Array.prototype.mrSum = function (this: number[]): number {
  return this.reduce((acc, val) => acc + val, 0);
};

Array.prototype.mrAverage = function (this: number[]): number {
  if (this.length === 0) {
    return 0;
  }
  return this.mrSum() / this.length;
};

Array.prototype.mrMin = function (this: number[]): number {
  return this.reduce((acc, val) => (val < acc ? val : acc), this[0]);
};

Array.prototype.mrMax = function (this: number[]): number {
  return this.reduce((acc, val) => (val > acc ? val : acc), this[0]);
};
