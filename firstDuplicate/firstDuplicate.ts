function firstDuplicate(array: number[]): number | string {
  let dupArray: number[] = [];
  let arrL: number = array.length;

  for (let i = 0; i < arrL; i++) {
    for (let j = arrL - 1; j >= i + 1; j--) {
      array[i] === array[j] && dupArray.push(array.lastIndexOf(array[i]));
    }
  }

  if (dupArray.length === 0) return "No duplicate found";

  let min: number = dupArray.sort()[0];

  console.log(array[min]);
}
firstDuplicate([2, 1, 3, 5, 3, 2]);
firstDuplicate([2, 4, 3, 5, 1]);
