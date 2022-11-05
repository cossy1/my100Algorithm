function isPalindrome(word: string): boolean {
    let res = false;
    let letters = [];
    let reversedWord = '';

    for (let i = 0; i < word.length; i++){
        letters.push(word[i]);
    }

    for (let j = 0; j < word.length; j++){
        reversedWord += letters.pop();
    }


    if (reversedWord === word)
        res = true;

    return res;
}


console.log(isPalindrome("abcdba")) // false
console.log(isPalindrome("madam")) // true