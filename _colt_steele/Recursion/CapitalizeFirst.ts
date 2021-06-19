function CapitalizeIst(arr: string[]) {
  if (arr.length === 1) return [arr[0][0].toUpperCase() + arr[0].substr(1)];
  const slicedArr = CapitalizeIst(arr.slice(0, -1));
  const str = arr.slice(arr.length - 1)[0][0].toUpperCase() + arr.slice(arr.length - 1)[0].substr(1);
  slicedArr.push(str);
  return slicedArr
}

console.log(CapitalizeIst(['der','taco','d', 'banana']));

function Capitalize(arr: string[]) {
  if (arr.length === 1) return [arr[0].toUpperCase()];
  let slicedArr = Capitalize(arr.slice(0, -1));
  slicedArr.push(arr.slice(arr.length -1)[0].toUpperCase());
  return slicedArr
}

console.log(Capitalize(['', 'c', 'Der','taco','d', 'banana', 'a']));
