import "../../src/prototype/number";
import { describe, it, expect } from "vitest";

describe("pad", () => {
  it("should pad a number with leading zeros to the default length of 2", () => {
    expect((5).mrPad()).to.equal("05");
  });

  it("should pad a number with leading zeros to a specified length", () => {
    expect((5).mrPad(4)).to.equal("0005");
  });

  it("should not pad a number if it already meets the specified length", () => {
    expect((123).mrPad(2)).to.equal("123");
  });

  it("should handle zero correctly", () => {
    expect((0).mrPad(3)).to.equal("000");
  });

  it("should convert negative numbers to strings without additional padding", () => {
    expect((-5).mrPad(3)).to.equal("-05");
  });

  it("should handle a length of 0 by returning the number as a string", () => {
    expect((5).mrPad(0)).to.equal("5");
  });
});