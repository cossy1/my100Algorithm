function IsPalindrome(str: string): boolean {
  let result = false;
  if (str[0] === str[str.length - 1] && str.length > 1) {
    result = true;
    IsPalindrome(str.slice(1, -1));
  }
  return result;
}

console.log(IsPalindrome('abcde'));
console.log(IsPalindrome('cccch'));
console.log(IsPalindrome('ptacocatp'));
console.log(IsPalindrome('abtacocatba'));