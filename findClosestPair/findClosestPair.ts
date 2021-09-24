function findClosestPair(number: number[], sum: number): number {
  let sumArray: number[] = [];
  let arrL: number = number.length;

  for (let i = 0; i < arrL; i++) {
    for (let j = arrL - 1; j >= i + 1; j--) {
      number[i] + number[j] === sum &&
        sumArray.push(
          Math.abs(number.indexOf(number[i]) - number.indexOf(number[j]))
        );
    }
  }
  return sumArray.length !== 0 ? sumArray.sort()[0] : -1;
}
let numbers = [1, 0, 2, 4, 3, 0],
  sum = 5;

console.log(findClosestPair(numbers, sum));
console.log(findClosestPair([2, 3, 7], 8));
