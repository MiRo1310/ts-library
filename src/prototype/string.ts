import "../types/string.d.ts";
import { DecomposeTextReturnType, StringReplacerObj } from "../types/string";

String.prototype.mrReplaceAll = function (searched: string, replacement: string): string {
  const escapedSearchValue = searched.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return this.replace(new RegExp(escapedSearchValue, "g"), replacement);
};

String.prototype.mrIsEmptyString = function (this: string): boolean {
  return this.trim() === "";
};

String.prototype.mrIsBooleanString = function (this: string): boolean {
  return this === "true" || this === "false";
};

String.prototype.mrDecomposeText = function (this: string, first: string, second: string): DecomposeTextReturnType {
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

String.prototype.mrStringReplacer = function (this: string, valueToReplace: StringReplacerObj[]): string {
  return valueToReplace.reduce((acc, { val, newValue }) => acc.replace(val, newValue ?? ""), this);
};

String.prototype.mrFirstLetterToUpperCase = function (this: string): string {
  return this.slice(0, 1).toUpperCase() + this.slice(1);
};
