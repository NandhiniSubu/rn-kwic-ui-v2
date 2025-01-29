export const deepObjectDiff = (
  obj1: Record<string, any>,
  obj2: Record<string, any>,
): Record<string, any> => {
  const changes: Record<string, any> = {};

  function compareObjects(
    a: Record<string, any>,
    b: Record<string, any>,
    path: string = '',
  ) {
    for (const key in b) {
      if (b.hasOwnProperty(key)) {
        const newPath = path ? `${path}.${key}` : key;

        if (typeof a[key] === 'object' && typeof b[key] === 'object') {
          // Recursively compare nested objects
          compareObjects(a[key], b[key], newPath);
        } else if (a[key] !== b[key]) {
          // Values are different, add to changes object
          changes[newPath] = b[key];
        }
      }
    }
  }

  compareObjects(obj1, obj2);
  return changes;
};
