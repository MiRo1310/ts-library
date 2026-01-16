import { JsonResponse } from "../types/json";

export const toJsonString = (val: string | number | boolean | object): string => JSON.stringify(val, null, 2);

export function toJSON<T>(val: string | null): JsonResponse<T> {
  try {
    return val ? { json: JSON.parse(val) as T, isValidJson: true } : { json: null, isValidJson: false };
  } catch (e: unknown) {
    return { json: null, isValidJson: false, error: e };
  }
}
