export function minBy<T>(arr: T[], callback: (item: T) => number): T | undefined {
  if (arr.length === 0) {
    return undefined; // Return null for an empty array
  }

  let minValue = callback(arr[0] as T); // Type assertion
  let minElement = arr[0] as T; // Type assertion

  for (let i = 1; i < arr.length; i++) {
    const value = callback(arr[i] as T); // Type assertion
    if (value < minValue) {
      minValue = value;
      minElement = arr[i] as T; // Type assertion
    }
  }

  return minElement;
}

export function maxBy<T>(arr: T[], callback: (item: T) => number): T | undefined {
  if (arr.length === 0) {
    return undefined; // Return null for an empty array
  }

  let maxValue = callback(arr[0] as T); // Type assertion
  let maxElement = arr[0] as T; // Type assertion

  for (let i = 1; i < arr.length; i++) {
    const value = callback(arr[i] as T); // Type assertion
    if (value > maxValue) {
      maxValue = value;
      maxElement = arr[i] as T; // Type assertion
    }
  }

  return maxElement;
}
