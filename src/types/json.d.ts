export declare function toJSON<T>(val: string | null): JsonResponse<T>;
export declare function toJsonString(val: string | number | boolean | object): string;

export interface JsonResponse<T> {
  json: T | null;
  isValidJson: boolean;
  error?: unknown;
}
