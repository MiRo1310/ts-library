import "../../prototype/array";
import { it, expect, describe } from "vitest";

describe("Array", () => {
  it("should get first element", () => {
    const array = [1, 2, 3, 4, 5];
    const firstElement = array.mrFirst();

    expect(firstElement).toBe(1);
  });

  it("should get undefined, no element in array", () => {
    const firstElement = [].mrFirst();

    expect(firstElement).toBe(undefined);
  });

  it("should get last element", () => {
    const array = [1, 2, 3, 4, 5, 6];
    const lastElement = array.mrLast();

    expect(lastElement).toBe(6);
  });

  it("should get undefined, no element in array", () => {
    const lastElement = [].mrLast();

    expect(lastElement).toBe(undefined);
  });

  it("should get nth element", () => {
    const array = [1, 2, 3, 4, 5, 6];
    const nthElement = array.mrNth(3);

    expect(nthElement).toBe(4);
  });

  it("should get undefined, no element in array", () => {
    const nthElement = [].mrNth(3);

    expect(nthElement).toBe(undefined);
  });
});
