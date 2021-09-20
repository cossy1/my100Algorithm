
    function firstNotRepeatingCharacter(input: string): string {
        let dupString: number[] = [];
        let arrL: number = input.length;
      
        for (let i = 0; i < arrL; i++) {
          for (let j = arrL - 1; j >= i + 1; j--) {
            input[i] !== input[j] && dupString.push(input.lastIndexOf(input[i]));
          }
        }
      
        if (dupString.length === 0) return "No duplicate found";
      
        let min: number = dupString.sort()[0];
      
        console.log(input[min]);
      }
      firstDuplicate([2, 1, 3, 5, 3, 2]);
      firstDuplicate([2, 4, 3, 5, 1]);
      


console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
