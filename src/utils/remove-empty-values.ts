export function removeEmptyOrNullValues(obj: {[key: string]: any}): {
  [key: string]: any;
} {
  const newObj: {[key: string]: any} = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] !== null && obj[key] !== undefined && obj[key] !== '') {
        newObj[key] = obj[key];
      }
    }
  }

  return newObj;
}
