function Capitalize(arr: string[]) {
  let newArr = [];
  if (arr.length === 0) return;
  for ( var i = 0; i < arr[0].length - 1; i++ ) {
     let str = '';
     if (i === 0) str = arr[0][i].toUpperCase();
     str += arr[0][i + 1];
    console.log(str)

    newArr.push(str);
  }
  console.log(newArr)
  Capitalize(arr.slice(1));
  return newArr
}

Capitalize(['car','taco','banana']);