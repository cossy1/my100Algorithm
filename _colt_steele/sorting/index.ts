
//swap
const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

/** Bubble sort (n2) **/
function bubbleSort <T>(arr: Array<T>) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    console.log(arr[i]);
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if ( arr[j] > arr[j + 1]) {
        swap(arr, j, j+1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr
}

console.log(bubbleSort([12, 11, 13, 17, 19, 6]));

/** selection sort () **/
function selectionSort <T>(arr: Array<T>) {
  for (let i = 0; i < arr.length; i++) {
    let lowestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[lowestIndex] > arr[j]) {
        lowestIndex = j
      }
    }
    if (i !== lowestIndex) swap(arr, i, lowestIndex);
  }
  return arr
}

console.log(selectionSort([12, 11, 13, 17, 19, 6]));
