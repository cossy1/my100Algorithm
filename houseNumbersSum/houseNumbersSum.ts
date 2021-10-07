function houseNumbersSum(array: number[]): number {
  let sum: number = 0;

  
  for (let i = 0; i < array.length; i++) {
    if (array[i] != 0) sum += array[i];
    else {
      break;
    }
  }
  return sum;
}
houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]);
