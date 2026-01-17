declare global {
  interface String {
    /**  Replaces all occurrences of a substring with a new string. */
    mrReplaceAll(searchValue: string, replaceValue: string): string;
    /**  Checks if the string is empty or contains only whitespace characters. */
    mrIsEmptyString (this: string): boolean
/**  Checks if the string represents a boolean value ('true' or 'false'). */
    mrIsBooleanString(this: string): boolean
    /** Decomposes the string into parts based on two search strings. */
    mrDecomposeText(this: string, first: string, second: string): DecomposeTextReturnType
/** Replaces multiple specified substrings with their corresponding new values. */
    mrStringReplacer(this: string, valueToReplace: StringReplacerObj[]): string
  }
}

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
