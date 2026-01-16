export {};

declare global {
    interface Array<T> {
        /**
         * Gets the first element of the array.
         * @returns The first element of the array or undefined if the array is empty.
         */
        mrFirst(): T | undefined;
        mrLast(): T | undefined;
        mrNth(n:number): T | undefined;
    }
}

Array.prototype.mrFirst = function <T>(this:T[]):T |undefined {
    return this?.[0];
};

Array.prototype.mrLast = function <T>(this:T[]):T |undefined {
    return this?.[this.length - 1];
};

Array.prototype.mrNth = function <T>(this:T[], n:number):T |undefined {
    return this?.[n];
};
