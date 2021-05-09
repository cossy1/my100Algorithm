//frequency counter pattern
function validAnagram (str1, str2) {

  //check if two strings are equal
  if (str1.length !== str2.length) {
    return false;
  }

  //setup frequency check for str1
  let frequencyCounter1 = {};

  for(var val of str1) {
    frequencyCounter1[val] = frequencyCounter1[val] + 1 || 1
  }
  for (var val of str2) {
    if(!(frequencyCounter1[val])) {
      return false
    } else {
      frequencyCounter1[val] -= 1;
    }
  }
  return true
}

console.log(validAnagram('silent', 'listen'));
console.log(validAnagram('', ''));
