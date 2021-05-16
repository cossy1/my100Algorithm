function CapitalizeIst(arr: string[]) {
  let newArr = [];
  let str = '';

  if (arr.length === 0) return newArr;
  if (arr[0].length === 1) str = arr[0].toUpperCase();
  for (var i = 0; i < arr[0].length - 1; i++) {
     if (i === 0) str = arr[0][i].toUpperCase();
     str += arr[0][i + 1];
  }
  newArr.push(str);
  return newArr.concat(CapitalizeIst(arr.slice(1)));

}

console.log(CapitalizeIst(['', 'c', 'Der','taco','d', 'banana', 'a', '']));