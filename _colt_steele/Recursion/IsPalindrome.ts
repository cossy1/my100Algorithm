// function IsPalindrome(str: string): boolean {
//   if(str.length === 1) return true;
//   if(str.length === 2) return str[0] === str[1];
//   if (str[0] === str[str.length - 1]) return IsPalindrome(str.slice(1, -1));
//   return false
// }


function IsPalindrome(str: string): boolean {
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str[str.length - 1]) return IsPalindrome(str.slice(1, -1));
  return false
}

console.log(IsPalindrome('abcde'));
console.log(IsPalindrome('nan'));
console.log(IsPalindrome('cccc'));
console.log(IsPalindrome('ptacocatp'));
console.log(IsPalindrome('abtacocatba'));
