// Write a recursive function called  someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the callback.
// Otherwise it returns false

function SomeRecursive (arr: any[], cb: (val: any) => any): boolean {
   if (arr.length === 0) return false;

   if (cb(arr[0])) return true;

  return SomeRecursive(arr.slice(1),cb);
}

console.log(SomeRecursive([1, 2, 3, 4], val => val % 2 !== 0));
console.log(SomeRecursive([2, 6, 8, 4], (val) => {
  return val % 2 !== 0;
}));