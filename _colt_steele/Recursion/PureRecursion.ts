/**PURE RECURSION**/
/**Tips :
 * for arrays use methods like slice, concat, spread operator,so you make copies
 * and not mutate them
 * **/
//collecting all odd numbers
function oddArrFunc (arr: number[]): number[] {
  let oddArr = [];
    if (arr.length === 0) return oddArr;
    if (arr[0] % 2 !== 0) {
      oddArr.push(arr[0]);
    }
  oddArr = oddArr.concat(oddArrFunc(arr.slice(1)));
  return oddArr;
}
console.log(oddArrFunc([1,2,3,4,5,6,7,8,9,11,13]));
console.log(oddArrFunc([]));