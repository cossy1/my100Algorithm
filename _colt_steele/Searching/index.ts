//Linear Search
function linearSearch <T>(arr:Array<T>, val:T): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1
};
console.log(linearSearch(['a', 'b', 'c', 'd'], ''));


//Binary Search log(n) (faster than linear search however must be sorted)
function binarySearch <T>(arr:Array<T>, val:T): number {
  let leftPointer = 0;
  let rightPointer = arr.length - 1 ;
  let middlePointer = Math.floor((leftPointer + rightPointer ) / 2);
  while (arr[middlePointer] !== val && leftPointer <= rightPointer) {
    if (arr[middlePointer] > val) rightPointer = middlePointer - 1;
    else leftPointer = middlePointer + 1;
    middlePointer = Math.floor((leftPointer + rightPointer ) / 2);
  }
  return arr[middlePointer] === val ? middlePointer : -1;
};

console.log(binarySearch(['a', 'b', 'c', 'd'], 'b'));

//naive string search
function strSearch (longStr: string, str: string): number {
  let count = 0;

  for(let i = 0; i < longStr.length; i++) {
      for(let j = 0; j < str.length; j++) {
        if (longStr[i + j] !== str[j]) break;
        if (j === str.length - 1) count++;
      }
  }

  return count;
}

console.log(strSearch('i am a blessing to my world', 'world'));
