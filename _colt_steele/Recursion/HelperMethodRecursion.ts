/**HELPER METHOD RECURSION**/

 function outer (input) {
  let outerScopeVariable = [];

  function helper (helperInput) {
    //modify the scope variable
    helper(helperInput--);
  }
  helper(input);

  return outerScopeVariable;
 };

//collecting all odd numbers
function oddArr (arr: number[]): number[] {
  let result = [];

  function  helper(helperInput: number[]) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
    helper(helperInput.slice(1));
  }
  helper(arr);

  return result;
}

console.log(oddArr([1,2,3,4,5,6,7,8,9,11,13]));
console.log(oddArr([]));