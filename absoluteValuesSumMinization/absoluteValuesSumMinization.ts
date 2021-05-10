function absoluteValuesSumMinimization(a: number[]): number {
  const isEvenArr = a.length % 2 === 0;

  return isEvenArr ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValuesSumMinimization([21, 40, 72]));
console.log(absoluteValuesSumMinimization([0, 1, 2, 3]));
console.log(absoluteValuesSumMinimization([-1, 3, 7, 6, 3]));
