import "../../src/prototype/array";

import { it, expect, describe } from "vitest";

describe("Get Array Elements", () => {
  it("should get first element", () => {
    expect([1, 2, 3, 4, 5].mrFirst()).toBe(1);
  });

  it("should get undefined, no element in array", () => {
    expect([].mrFirst()).toBe(undefined);
  });

  it("should get last element", () => {
    expect([1, 2, 3, 4, 5, 6].mrLast()).toBe(6);
  });

  it("should get undefined, no element in array", () => {
    expect([].mrLast()).toBe(undefined);
  });

  it("should get nth element", () => {
    expect([1, 2, 3, 4, 5, 6].mrNth(3)).toBe(4);
  });

  it("should get undefined, no element in array", () => {
    expect([].mrNth(3)).toBe(undefined);
  });
});

describe("deleteDoubleEntriesInArray", () => {
  it("should remove duplicate entries from an array", () => {
    expect(["a", "b", "a", "c", "b"].mrRemoveDuplicates()).to.deep.equal(["a", "b", "c"]);
  });

  it("should return the same array if there are no duplicates", () => {
    expect(["a", "b", "c"].mrRemoveDuplicates()).to.deep.equal(["a", "b", "c"]);
  });

  it("should return an empty array if the input is empty", () => {
    expect([].mrRemoveDuplicates()).to.deep.equal([]);
  });

  it("should handle arrays with one element", () => {
    expect(["a"].mrRemoveDuplicates()).to.deep.equal(["a"]);
  });
});

describe("trimAllItems", () => {
  it("should trim whitespace from all items in the array", () => {
    expect(["  a  ", "  b", "c  "].mrTrimItems()).to.deep.equal(["a", "b", "c"]);
  });

  it("should return an empty array if the input is empty", () => {
    expect([].mrTrimItems()).to.deep.equal([]);
  });

  it("should handle arrays with one element", () => {
    expect(["  singleItem  "].mrTrimItems()).to.deep.equal(["singleItem"]);
  });

  it("should not modify items that do not have whitespace", () => {
    expect(["a", "b", "c"].mrTrimItems()).to.deep.equal(["a", "b", "c"]);
  });

  it("should handle arrays with empty strings", () => {
    expect(["  ", "a", "  "].mrTrimItems()).to.deep.equal(["", "a", ""]);
  });

  it("should handle arrays with boolean and number and strings", () => {
    expect(["  ", "a", true, 123, "  b   "].mrTrimItems()).to.deep.equal(["", "a", true, 123, "b"]);
  });
});

describe("Number Array", () => {
  it("should sum all values", () => {
    expect([1, 10, 45].mrSum()).to.be.equal(56);
    expect([0, 1, 10, 45].mrSum()).to.be.equal(56);
    expect([0, 1, 10, 45, 100].mrSum()).to.be.equal(156);
    expect([0, 1, 10, 45, 0.55, 0.02].mrSum()).to.be.equal(56.57);
  });

  it("should get average of all values", () => {
    expect([].mrAverage()).to.be.equal(0);
    expect([1, 11, 45].mrAverage()).to.be.equal(19);
    expect([0, 1, 10, 45].mrAverage()).to.be.equal(14);
    expect([0, 1, 10, 44, 100].mrAverage()).to.be.equal(31);
    expect([0, 1, 10, 45, 25, 9].mrAverage()).to.be.equal(15);
  });

  it("should get min from Array", () => {
    expect([1, 11, 45].mrMin()).to.be.equal(1);
    expect([0, 1, 10, 45].mrMin()).to.be.equal(0);
    expect([1, 10, 44, -15, 100].mrMin()).to.be.equal(-15);
    expect([10, 45, 25, 9].mrMin()).to.be.equal(9);
  });

  it("should get average of all values", () => {
    expect([-23, 1, 11, 45].mrMax()).to.be.equal(45);
    expect([0, 1, 10, 44, 100, 3].mrMax()).to.be.equal(100);
    expect([0, 1, 10, 45, 25, 9].mrMax()).to.be.equal(45);
  });
});
