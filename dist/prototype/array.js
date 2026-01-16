Array.prototype.mrFirst = function () {
    return this?.[0];
};
Array.prototype.mrLast = function () {
    return this?.[this.length - 1];
};
Array.prototype.mrNth = function (n) {
    return this?.[n];
};
export {};
