export declare function isTruthy  (value: any): boolean;
export declare function isFalsy  (value: any): boolean;
export declare function isDefined  <T>(value: T | undefined | null): value is T 
export declare function deepCopy <T>(obj: T, errorHandler?:(e:any)=>void): T | undefined  
