Array.prototype.mrFirst = function <T>(this: T[]): T | undefined {
  return this?.[0];
};

Array.prototype.mrLast = function <T>(this: T[]): T | undefined {
  return this?.[this.length - 1];
};

Array.prototype.mrNth = function <T>(this: T[], n: number): T | undefined {
  return this?.[n];
};
