import { isObject, mapValues, omit } from "lodash";

export function excludeField<T>(
  fieldName: string,
  data: T,
  deep: boolean = true
): T {
  if (data === null || data === undefined) {
    return data;
  }

  if (isObject(data)) {
    const withoutField = omit(data as any, [fieldName]);

    if (deep) {
      return mapValues(withoutField, (value) =>
        excludeField(fieldName, value, deep)
      ) as T;
    }

    return withoutField as T;
  }

  return data;
}
