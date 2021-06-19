// function Flatten (arr: any[]) {
//   let flattenArray = [];
//
//   if(arr.length === 0) return;
//
//   for (var i = 0; i < arr.length; i++) {
//     if(Array.isArray(arr[i])) {
//       flattenArray = flattenArray.concat(Flatten(arr[i]))
//     } else {
//       flattenArray.push(arr[i])
//     }
//   }
//   return flattenArray;
// }


console.log(Flatten([1, 2, 3, [4, 5, [6]]]));

function Flatten (arr: any[]) {
  let newArr = [];
  for (let val of arr) {
    if (Array.isArray(val)) newArr = newArr.concat(Flatten(val))
    else newArr.push(val)
  }
  return newArr;
}

console.log(Flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) );
