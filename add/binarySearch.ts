const ar = [1, 2, 6, 4, 3, 5, 7, 9, 8, 0];

//Function to search for a number in an array.
const searchNum = (arr, num, start, end) => {
    let sortedArray = arr.sort((a, b) => a - b);
    if(start > end) return num + ' does not exist in the array';
    let midPoint = Math.floor((start + end)/2);
    if(sortedArray[midPoint] === num) return num + ' found at position ' + midPoint;
    if(sortedArray[midPoint] > num) return searchNum(arr, num, start, midPoint - 1);
    if(sortedArray[midPoint] < num)return  searchNum(arr, num, midPoint + 1, end);
};

console.log(searchNum(ar, 9, 0, ar.length - 1));
