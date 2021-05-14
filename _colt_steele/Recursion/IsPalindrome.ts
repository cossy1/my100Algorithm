function IsPalindrome(str: string): boolean {
  let result = false;
  if (str[0] === str[str.length - 1] && str.length > 1) {
    result = true;
    IsPalindrome(str.slice(1, -1));
  } else {
    result = false;
  }
  return result;
}

console.log(IsPalindrome('abcd'));
console.log(IsPalindrome('ccccd'));
console.log(IsPalindrome('tacocat'));
console.log(IsPalindrome('abtacocatba'));