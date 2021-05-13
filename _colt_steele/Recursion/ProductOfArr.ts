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

function ProductOfArr2 (arr:number[]) {
  if(arr.length === 0) return 1;
  return arr[0] * ProductOfArr2(arr.slice(1));
}

console.log(ProductOfArr2([1, 2, 3, 4, 5]));
