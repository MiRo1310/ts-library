import { deepCopy, isDefined, isFalsy, isTruthy } from "../../src";
import {describe, it,  expect, vi} from "vitest";

describe("isTruthy", () => {
  it("should return true for truthy values", () => {
    expect(isTruthy(1)).toBeTruthy();
    expect(isTruthy("1")).toBeTruthy();
    expect(isTruthy(true)).toBeTruthy();
    expect(isTruthy("true")).toBeTruthy();
  });

  it("should return false for falsy values", () => {
    expect(isTruthy(0)).toBeFalsy();
    expect(isTruthy("0")).toBeFalsy();
    expect(isTruthy(false)).toBeFalsy();
    expect(isTruthy("false")).toBeFalsy();
    expect(isTruthy(undefined)).toBeFalsy();
    expect(isTruthy(null)).toBeFalsy();
  });
});

describe("isFalsy", () => {
  it("should return true for falsy values", () => {
    expect(isFalsy(0)).toBeTruthy();
    expect(isFalsy("0")).toBeTruthy();
    expect(isFalsy(false)).toBeTruthy();
    expect(isFalsy("false")).toBeTruthy();
    expect(isFalsy(undefined)).toBeTruthy();
    expect(isFalsy(null)).toBeTruthy();
  });

  it("should return false for truthy values", () => {
    expect(isFalsy(1)).toBeFalsy();
    expect(isFalsy("1")).toBeFalsy();
    expect(isFalsy(true)).toBeFalsy();
    expect(isFalsy("true")).toBeFalsy();
  });
});

describe("isDefined", () => {
  it("should return true for defined values", () => {
    expect(isDefined(123)).toBeTruthy();
    expect(isDefined("test")).toBeTruthy();
    expect(isDefined(true)).toBeTruthy();
    expect(isDefined({})).toBeTruthy();
    expect(isDefined([])).toBeTruthy();
  });

  it("should return false for undefined or null values", () => {
    expect(isDefined(undefined)).toBeFalsy();
    expect(isDefined(null)).toBeFalsy();
  });
});

describe("deepCopy", () => {
  it("should create a deep copy of an object", () => {
    const original = { a: 1, b: { c: 2 } };
    const copy = deepCopy(original);

    expect(copy).to.deep.equal(original);
    expect(copy).to.not.equal(original); // Ensure it's not the same reference
  });

  it("should return undefined for undefined or null input", () => {
    expect(deepCopy(undefined)).toBeUndefined();
    expect(deepCopy(null)).toBeUndefined();
  });

  it("should handle arrays correctly", () => {
    const original = [1, 2, { a: 3 }];
    const copy = deepCopy(original);

    expect(copy).to.deep.equal(original);
    expect(copy).to.not.equal(original); 
  });

  it("should return undefined for circular references, with callback", () => {
    const circular: any = {};
    circular.self = circular;
    let e: any = null;
    const copy = deepCopy(circular,(error)=>{e =  error;} );
    expect(copy).toBeUndefined();
    expect(e).toBeDefined();
  });
  
  it("should return undefined for circular references", () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    
    const circular: any = {};
    circular.self = circular;
  
    const copy = deepCopy(circular);
    expect(copy).toBeUndefined();
    expect(errorSpy).toHaveBeenCalledTimes(1);
    errorSpy.mockRestore(); 
  });
});
