function adjacentElementsProduct(inputArray: number[]): number {
  let largestNumProduct = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length - 1; i++) {
    const numProduct = inputArray[i] * inputArray[i + 1];
    largestNumProduct =
      largestNumProduct > numProduct ? largestNumProduct : numProduct;
  }
  return largestNumProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 9, 3]));
console.log(adjacentElementsProduct([-3, -2, 2, -1, -9, 8]));
