type ArrayObject = {
    name: string,
    age: number,
}
type ArrayInput = ArrayObject[]
type Callback = (input: ArrayObject | undefined) => ArrayObject;

export const minBy = (array: ArrayInput, cb: Callback) => {
    if (array.length === 0) {
      return undefined;
    } else if (array.length) {
        let minValue = cb(array[0]);
        let minItem = array[0];
    
        for (let i = 1; i < array.length; i++) {
        const value = cb(array[i]);
        if (value < minValue) {
            minValue = value;
            minItem = array[i];
        }
        }
    
        return minItem;
    }
  };
  
  export const maxBy = (array: ArrayInput, cb: Callback) => {
    if (array.length === 0) {
      return undefined;
    }
  
    let maxValue = cb(array[0]);
    let maxItem = array[0];
  
    for (let i = 1; i < array.length; i++) {
      const value = cb(array[i]);
      if (value > maxValue) {
        maxValue = value;
        maxItem = array[i];
      }
    }
  
    return maxItem;
  };
  