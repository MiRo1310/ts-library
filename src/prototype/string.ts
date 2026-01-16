import "../types/string.d.ts";

String.prototype.replaceAll = function( searched: string, replacement: string): string  { 
  const escapedSearchValue = searched.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");  
  return this.replace(new RegExp(escapedSearchValue, "g"), replacement);
};