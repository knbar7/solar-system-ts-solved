export function minBy<T>(arr: T[], callback: (item: T) => number | string): T | undefined {
    if (arr.length === 0) {
      return undefined;
    }

    return arr.reduce((min, current) => {
      const minValue = callback(min);
      const currentValue = callback(current);

      return currentValue < minValue ? current : min;
    });
}



export function maxBy<T>(arr: T[], callback: (item: T) => number | string): T | undefined {
  if (arr.length === 0) {
    return undefined;
  }

  return arr.reduce((max, current) => {
    const maxValue = callback(max);
    const currentValue = callback(current);

    return currentValue > maxValue ? current : max;
  });
}

