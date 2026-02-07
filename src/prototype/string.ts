import "../types/string.d.ts";
import {
  DecomposeTextReturnType,
  MrDecomposeText,
  MrFirstLetterToUpperCase,
  MrIsBooleanString,
  MrIsEmptyString,
  MrRemoveDuplicatedSpaces,
  MrRemoveQuotes,
  MrReplaceAll,
  MrStringReplacer,
  StringReplacerObj,
} from "../types/string";

const mrReplaceAll: MrReplaceAll = function (searched: string, replacement: string): string {
  const escapedSearchValue = searched.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return this.replace(new RegExp(escapedSearchValue, "g"), replacement);
};

const mrIsEmptyString: MrIsEmptyString = function (this: string): boolean {
  return this.trim() === "";
};

const mrIsBooleanString: MrIsBooleanString = function (this: string): boolean {
  return this === "true" || this === "false";
};

const mrDecomposeText: MrDecomposeText = function (this: string, first: string, second: string): DecomposeTextReturnType {
  const startIndex = this.indexOf(first);
  const endIndex = this.indexOf(second, startIndex);
  const substring = this.substring(startIndex, endIndex + second.length);
  const substringExcludeSearch = substring.mrStringReplacer([
    { val: first, newValue: "" },
    { val: second, newValue: "" },
  ]);
  const textExcludeSubstring = this.replace(substring, "").trim();
  return {
    startIndex,
    endIndex,
    substring,
    textExcludeSubstring,
    substringExcludeSearch,
  };
};

const mrStringReplacer: MrStringReplacer = function (this: string, valueToReplace: StringReplacerObj[]): string {
  return valueToReplace.reduce((acc, { val, newValue }) => acc.replace(val, newValue ?? ""), this);
};

const mrFirstLetterToUpperCase: MrFirstLetterToUpperCase = function (this: string): string {
  return this.slice(0, 1).toUpperCase() + this.slice(1);
};

const mrRemoveDuplicatedSpaces: MrRemoveDuplicatedSpaces = function (this: string): string {
  return this.replace(/\s+/g, " ").trim();
};

const mrSingleQuotesToDoubleQuotes: MrReplaceAll = function (this: string): string {
  // prettier-ignore
  return this.mrReplaceAll("'", "\"");
};

const mrRemoveQuotes: MrRemoveQuotes = function (this: string): string {
  return this.replace(/['"]/g, "");
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const stringPrototypeMethods: [string, Function][] = [
  ["mrReplaceAll", mrReplaceAll],
  ["mrIsEmptyString", mrIsEmptyString],
  ["mrIsBooleanString", mrIsBooleanString],
  ["mrDecomposeText", mrDecomposeText],
  ["mrStringReplacer", mrStringReplacer],
  ["mrFirstLetterToUpperCase", mrFirstLetterToUpperCase],
  ["mrRemoveDuplicatedSpaces", mrRemoveDuplicatedSpaces],
  ["mrSingleQuotesToDoubleQuotes", mrSingleQuotesToDoubleQuotes],
  ["mrRemoveQuotes", mrRemoveQuotes],
];

for (const [name, fn] of stringPrototypeMethods) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  String.prototype[name] = fn;
}
