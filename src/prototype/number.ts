import "../types/number.d.ts";
import { MrPad } from "../types/number";

const mrPad: MrPad = function (this: number, length: number = 2): string {
  if (this < 0) {
    return `-${(this * -1).toString().padStart(length - 1, "0")}`;
  }
  return this.toString().padStart(length, "0");
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const numberPrototypeMethods: [string, Function][] = [["mrPad", mrPad]];

for (const [name, fn] of numberPrototypeMethods) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  Number.prototype[name] = fn;
}
