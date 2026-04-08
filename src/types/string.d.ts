declare global {
  interface String {
    /**  Replaces all occurrences of a substring with a new string. */
    mrReplaceAll: MrReplaceAll;
    /**  Checks if the string is empty or contains only whitespace characters. */
    mrIsEmptyString: MrIsEmptyString;
    /**  Checks if the string represents a boolean value ('true' or 'false'). */
    mrIsBooleanString: MrIsBooleanString;
    /** Decomposes the string into parts based on two search strings. */
    mrDecomposeText: MrDecomposeText;
    /** Replaces multiple specified substrings with their corresponding new values. */
    mrStringReplacer: MrStringReplacer;
    /** Converts the first letter of the string to uppercase. */
    mrFirstLetterToUpperCase: MrFirstLetterToUpperCase;
    /** Removes duplicate spaces from the string and trims it. */
    mrRemoveDuplicatedSpaces: MrRemoveDuplicatedSpaces;
    /** Replaces all single quotes in the string with double quotes. */
    mrSingleQuotesToDoubleQuotes: MrSingleQuotesToDoubleQuotes;
    /** Removes all single and double quotes from the string. */
    mrRemoveQuotes: MrRemoveQuotes;
  }
}

export type MrReplaceAll = (this: string, searched: string, replacement: string) => string;
export type MrIsEmptyString = (this: string) => boolean;
export type MrIsBooleanString = (this: string) => boolean;
export type MrDecomposeText = (this: string, first: string, second: string) => DecomposeTextReturnType;
export type MrStringReplacer = (this: string, valueToReplace: StringReplacerObj[]) => string;
export type MrFirstLetterToUpperCase = (this: string) => string;
export type MrRemoveDuplicatedSpaces = (this: string) => string;
export type MrSingleQuotesToDoubleQuotes = (this: string) => string;
export type MrRemoveQuotes = (this: string) => string;

export interface DecomposeTextReturnType {
  startIndex: number;
  endIndex: number;
  substring: string;
  textExcludeSubstring: string;
  substringExcludeSearch: string;
}

export interface StringReplacerObj {
  val: string;
  newValue?: string;
}
export {};
