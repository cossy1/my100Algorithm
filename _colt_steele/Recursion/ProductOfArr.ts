function ProductOfArr (arr: number[]) {
  let total = 1;
  function Helper (arr) {
    if ( arr.length === 0 ) return;
    total *= arr[0];
    Helper(arr.slice(1))
  }
  Helper(arr);
  return total;
};

console.log(ProductOfArr([1, 2, 3, 4, 5]));