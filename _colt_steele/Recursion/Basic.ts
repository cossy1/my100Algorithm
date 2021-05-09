//is texample
function count(num: number): number {
  if (num <= 0 ) {
    console.log('All done');
    return;
  }
  console.log(num);
  num--;
  count(num);
}

count(10);

//2nd example
function sumRange(num: number): number {
  if(num  === 1) return 1;
  return num + sumRange(num - 1);
};

console.log(sumRange(4));

//3rd example
function factorial(num: number): number {
  if (num === 0 || num  === 1) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));