export declare const toJSON: ToJSON;
export declare const toJsonString: ToJsonString;

export type ToJSON = <T>(val: string | null) => JsonResponse<T>;
export type ToJsonString = (val: string | number | boolean | object) => string;

export interface JsonResponse<T> {
  json: T | null;
  isValidJson: boolean;
  error?: unknown;
}
