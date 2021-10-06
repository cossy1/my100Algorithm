function firstDigit(input: string): number | string {
  let newInput: string[] = input.split("");
  for (let i = 0; i < newInput.length; i++) {
    if (Number.isInteger(parseInt(newInput[i])) === true) return newInput[i];
  }
  return "no number found";
}
console.log(firstDigit("q2q-q"));
console.log(firstDigit("0ss"));
