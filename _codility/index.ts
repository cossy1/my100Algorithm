//Expect an integer between 1 and 2,147,483,647
//Convert that integer into its binary value
//Return the length of the largest sequence of zeros in between ones
//Return 0 if no zeros in between ones

function solution (N: number): number {

  // Tests if our value is an integer
  if (N === parseInt(String(N), 10) && N >= 1 && N < 2147483647) {
    // Convert to binary
    const Binary = N.toString(2).split('');
    console.log(N.toString(2));

    // calling our recursive function with initial empty gaps
    return getGaps(Binary, []);

  }

  // default if it doesn't meet the requirements
  return 0;
}

function getGaps (BinaryArray: Array<string>, gaps: Array<number>) {
  // finding the first one via its index
  const firstOne = BinaryArray.indexOf("1");
  if (firstOne > -1) {
    // new array created taking a slice of original array
    // from the index of the firstOne + 1 index
    let NewBinaryArray = BinaryArray.slice(firstOne + 1);

    // finding second one via its index in new array slice
    const secondOne = NewBinaryArray.indexOf("1");
    // accounting for no zeros
    if (secondOne > 0) {
      // adding 2 to our gaps array
      gaps.push(secondOne);
    }

    // Pass array minus second one and gaps array
    return getGaps(NewBinaryArray.slice(secondOne + 1), gaps);
  }
  // if gaps array length is empty return 0
  // otherwise return largest value in array
  return (gaps.length > 0) ? Math.max.apply(Math, gaps) : 0;
}


console.log(solution(433));
console.log(solution(51272));


//Cyclic rotation
function solution2(A: Array<any>, K: number): Array<any> {
  const rotateArray = (arr, shiftCount) => {
    console.log(arr.slice(-0));
    console.log(arr.slice(0, -shiftCount));
    return [
    ...arr.slice(-shiftCount),
    ...arr.slice(0, -shiftCount)
  ]};
  const shiftCount: number = K % A.length;

  return shiftCount ? rotateArray(A, shiftCount) : A;
}

console.log(solution2([1,2,3,4], 3))
