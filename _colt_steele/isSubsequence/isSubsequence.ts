//frequency counter pattern
function isSubsequence (str1, str2) {
  if(!str1) return true;

  let i = 0;
  let j = 0;

  while ( j < str2.length ) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) return true;
    j++
  }
  return false
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'cba'));
