function houseOfCats(legs: number): number[] {
  let result: number[] = [];
  while (legs % 2 === 0) {
    result.unshift(legs / 2);
    legs -= 4;
  }
  return result;
}
console.log(houseOfCats(6));
