import { describe, expect, test } from "vitest";
import { toJSON, toJsonString } from "../../src";

const obj = { a: 1, b: "test", c: true };
describe("Json", () => {
  test("json to be valid json string", () => {
    expect(toJsonString(obj)).toBe(
      `{
  "a": 1,
  "b": "test",
  "c": true
}`,
    );
  });

  test("json to be valid json string", () => {
    expect(toJsonString(true)).toBe("true");
  });

  test("json to be valid json string", () => {
    expect(toJsonString(1520)).toBe("1520");
  });

  test("jsonString to be inValid json", () => {
    const result = toJSON("{'a': 1,'b': 'test','c': true}");
    expect(result).to.have.property("isValidJson", false);
    expect(result).to.have.property("json", null);
    expect(typeof result.error).to.be.oneOf(["object", "string", "number", "boolean", "undefined"]);
  });

  test("jsonString to be valid json", () => {
    // prettier-ignore
    const result = toJSON("{\"a\": 1,\"b\": \"test\",\"c\": true}");
    expect(result).to.have.property("isValidJson", true);
    expect(result.error).toBeUndefined();
    expect(result).to.have.property("json").that.deep.equal(obj);
  });

  test("jsonString to be valid json", () => {
    const result = toJSON(null);
    expect(result).to.have.property("isValidJson", false);
    expect(result).to.have.property("json", null);
    expect(result).to.have.property("error", "Value is null");
  });
});
