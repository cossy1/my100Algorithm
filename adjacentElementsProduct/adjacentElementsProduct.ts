function adjacentElementProduct(array: number[]): number | string {
  let sum: number[] = [];
  if (array.length >= 2) {
    for (
      let index = 0, i = 0, j = 1;
      i < array.length && j < array.length;
      i += 2, j += 2
    ) {
      sum[index++] = array[i] * array[j];
    }
    return sum.sort()[sum.length - 1];
  }
  return "not a valid array";
}
adjacentElementProduct([2, 4, 3, 2]);
