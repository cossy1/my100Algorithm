function alphabeticShift(inputString: string): string {
  const alphabet: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let shiftedInputString = inputString.split("");
  for (let i = 0; i < inputString.length; i++) {
    let index = 0;
    if (shiftedInputString[i] !== "z") {
      index = alphabet.indexOf(shiftedInputString[i]) + 1;
    }
    shiftedInputString[i] = alphabet[index];
  }
  return shiftedInputString.join("");
}

console.log(alphabeticShift("crazy"));
console.log(alphabeticShift("mado"));
