import { JsonResponse, ToJSON, ToJsonString } from "../types/json";

export const toJsonString: ToJsonString = (val: string | number | boolean | object): string => JSON.stringify(val, null, 2);

export const toJSON: ToJSON = <T>(val: string | null): JsonResponse<T> => {
  try {
    return val ? { json: JSON.parse(val) as T, isValidJson: true } : { json: null, isValidJson: false, error: "Value is null" };
  } catch (e: unknown) {
    return { json: null, isValidJson: false, error: e };
  }
};
