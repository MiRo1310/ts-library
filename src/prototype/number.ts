import "../types/number.d.ts";

Number.prototype.mrPad = function(this: number, length: number = 2): string  {
  if (this < 0) {
    return `-${(this * -1).toString().padStart(length - 1, "0")}`;
  }
  return this.toString().padStart(length, "0");
};
