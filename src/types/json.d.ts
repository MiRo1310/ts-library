export declare function parseJSON<T>(val: string | null): JsonResponse<T>;
export declare function toJson(val: string | number | boolean | object): string;

export interface JsonResponse<T> {
  json: T | null;
  isValidJson: boolean;
  error?: unknown;
}
