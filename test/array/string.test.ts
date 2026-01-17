import "../../src/prototype/string";
import { describe, it, expect } from "vitest";
import { isString } from "../../src";
import { StringReplacerObj } from "../../src/types/string";

describe("replaceAll", () => {
  it("Replace all", () => {
    const texts = [
      { val: "Test", expect: "Test" },
      {
        val: "Abc. Def. Ghi.//.",
        expect: "Abc  Def  Ghi // ",
      },
    ];

    texts.forEach((text) => {
      const result = text.val.mrReplaceAll(".", " ");
      expect(result).to.equal(text.expect);
    });
  });
});

describe("isString", () => {
  it("should return true for string values", () => {
    expect(isString("hello")).toBeTruthy();
    expect(isString("")).toBeTruthy();
  });

  it("should return false for non-string values", () => {
    expect(isString(123)).toBeFalsy();
    expect(isString(true)).toBeFalsy();
    expect(isString(null)).toBeFalsy();
    expect(isString(undefined)).toBeFalsy();
    expect(isString({})).toBeFalsy();
    expect(isString([])).toBeFalsy();
  });
});

describe("StringReplacer", () => {
  it("should remove all matching strings from the substring", () => {
    const valueToReplace: StringReplacerObj[] = [{ val: "Hello" }, { val: "World" }];
    expect("Hello World!".mrStringReplacer(valueToReplace)).to.equal(" !");
  });

  it("should replace all matching objects in the substring", () => {
    const valueToReplace = [
      { val: "Hello", newValue: "Hi" },
      { val: "World", newValue: "Earth" },
    ];
    expect("Hello World!".mrStringReplacer(valueToReplace)).to.equal("Hi Earth!");
  });

  it("should return the original substring if no matches are found", () => {
    const valueToReplace = [{ val: "Test" }];
    const result = "Hello World!".mrStringReplacer(valueToReplace);
    expect(result).to.equal("Hello World!");
  });

  it("should handle an empty array for valueToReplace", () => {
    const valueToReplace: StringReplacerObj[] = [];
    const result = "Hello World!".mrStringReplacer(valueToReplace);
    expect(result).to.equal("Hello World!");
  });

  it("should handle an empty substring", () => {
    const valueToReplace: StringReplacerObj[] = [{ val: "Hello" }, { val: "World" }];
    const result = "".mrStringReplacer(valueToReplace);
    expect(result).to.equal("");
  });
});

describe("isBooleanString", () => {
  it("should return true for 'true'", () => {
    expect("true".mrIsBooleanString()).toBeTruthy();
  });

  it("should return true for 'false'", () => {
    expect("false".mrIsBooleanString()).toBeTruthy();
  });

  it("should return false for non-boolean strings", () => {
    expect("yes".mrIsBooleanString()).toBeFalsy();
    expect("no".mrIsBooleanString()).toBeFalsy();
    expect("".mrIsBooleanString()).toBeFalsy();
  });
});

describe("isEmptyString", () => {
  it("should return true for an empty string", () => {
    expect("".mrIsEmptyString()).toBeTruthy();
  });

  it("should return true for a string with only spaces", () => {
    expect("   ".mrIsEmptyString()).toBeTruthy();
  });

  it("should return false for a non-empty string", () => {
    expect("hello".mrIsEmptyString()).toBeFalsy();
  });
});

describe("decomposeText", () => {
  it("Decompose text check values", () => {
    const result = "Das ist ein __Test. Das ist ein Test2".mrDecomposeText("__", ".");
    expect(result).to.deep.equal({
      startIndex: 12,
      endIndex: 18,
      substring: "__Test.",
      textExcludeSubstring: "Das ist ein  Das ist ein Test2",
      substringExcludeSearch: "Test",
    });

    const result2 = "Das ist ein __Test.".mrDecomposeText("?", ".");
    expect(result2).to.deep.equal({
      startIndex: -1,
      endIndex: 18,
      substring: "Das ist ein __Test.",
      textExcludeSubstring: "",
      substringExcludeSearch: "Das ist ein __Test",
    });

    const result3 = "Das ist ein __Test.".mrDecomposeText("?", "-");
    expect(result3).to.deep.equal({
      startIndex: -1,
      endIndex: -1,
      substring: "",
      textExcludeSubstring: "Das ist ein __Test.",
      substringExcludeSearch: "",
    });
  });
});
