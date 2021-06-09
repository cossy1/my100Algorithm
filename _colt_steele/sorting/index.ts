
/** swap **/
const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

/** Bubble sort O(n2) **/
function bubbleSort <T>(arr: Array<T>) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if ( arr[j] > arr[j + 1]) {
        swap(arr, j, j+1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

console.log(bubbleSort([12, 11, 13, 17, 19, 6]));

/** selection sort O(n2) (better than bubble sort)**/
function selectionSort <T>(arr: Array<T>) {
  for (let i = 0; i < arr.length; i++) {
    let lowestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowestIndex] > arr[j]) {
        lowestIndex = j
      }
    }
    if (i !== lowestIndex) swap(arr, i, lowestIndex);
  }
  return arr;
}

console.log(selectionSort([12, 11, 13, 17, 19, 6]));

/** insertion sort O(n2) **/
function insertionSort <T>(arr: Array<T>) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j > -1 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j]
    }
    arr[j+1]= currentVal;
  }
  return arr;
}

console.log(insertionSort([12, 11, 13, 17, 19, 6, 1, -4, 0]));

/** merge two sorted arrays **/
function mergeArray <T>(arr1: Array<T>, arr2: Array<T>) {
  let resultArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      resultArr.push(arr1[i]);
      i++
    } else {
      resultArr.push(arr2[j]);
      j++
    }
  }
  while (i < arr1.length) {
    resultArr.push(arr1[i]);
    i++
  }
  while (j < arr2.length) {
    resultArr.push(arr2[j]);
    j++
  }
  return resultArr;
}

console.log(mergeArray([11, 13, 17, 19], [ -4, 0, 1]));

/** merge sort O(n2) **/
function mergeSort <T>(arr1: Array<T>, arr2: Array<T>) {
  let resultArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      resultArr.push(arr1[i]);
      i++
    } else {
      resultArr.push(arr2[j]);
      j++
    }
  }
  while (i < arr1.length) {
    resultArr.push(arr1[i]);
    i++
  }
  while (j < arr2.length) {
    resultArr.push(arr2[j]);
    j++
  }
  return resultArr;
}

console.log(mergeSort([11, 13, 17, 19], [ -4, 0, 1]));
