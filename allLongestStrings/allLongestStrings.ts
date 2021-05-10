function allLongestStrings(arrs: string[]): string[] {
  let logestArrStr = 0;
  let longestArr = [];
  arrs.forEach(
    (arr: string) =>
      (logestArrStr = logestArrStr > arr.length ? logestArrStr : arr.length)
  );

  arrs.forEach((arr: string) => {
    if (logestArrStr === arr.length) longestArr.push(arr);
  });

  return longestArr;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["abcd", "a", "", "abcde", "efg"]));
