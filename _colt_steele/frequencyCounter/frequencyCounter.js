function same(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for(let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for(let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if(!(key ** 2 in frequencyCounter2)){
      return false
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false
    }
  }
  return true
}

console.log(same([1,2,4],[1,4,16]));


function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;

  let frequencyCount = {};

  for(let val of strNum1){
    frequencyCount[val] = (frequencyCount[val] || 0) + 1
  }

  for(let val of strNum2){
    if (!frequencyCount[val]) return false;
    frequencyCount[val]--;
  }
  return true;
}

console.log(sameFrequency(12240,42102));
