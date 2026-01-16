import "../../src/prototype/string";
import {describe, it, expect} from "vitest";

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
      const result = text.val.replaceAll(".", " ");
      expect(result).to.equal(text.expect);
    });
  });
});
