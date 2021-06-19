// multi pointer patterns
function countUniqueValues(arr) {
  let count = 0;
  for(let j = 1; j < arr.length; j++) {
    if (arr[count] !== arr[j]) {
      count++;
      arr[count] = arr[j]
    }
  }
  return count + 1
}

console.log(countUniqueValues([-5,-5,-3, -3,-2,-1,0,2,3,4,6,10]));
console.log(countUniqueValues([-1,-1,-1,-1,1,1,2,3]));
console.log(countUniqueValues([1,2,3,4,5,5,6]));
