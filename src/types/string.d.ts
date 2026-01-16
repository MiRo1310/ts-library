declare global {
  interface String {
    /**  Replaces all occurrences of a substring with a new string. */
    replaceAll(searchValue: string, replaceValue: string): string;    
  }
}
export {};
