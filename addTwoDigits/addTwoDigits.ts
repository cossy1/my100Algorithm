function addTwoDigits(n: any): number {
  const strArr = n.toString().split("");

  // more than two digit
  return strArr.reduce(
    (acc: string, cur: string) => parseInt(acc) + parseInt(cur)
  );


  // let sumOfArr = 0;
  // for ( var i = 0; i < strArr.length; i++) {
  //   sumOfArr += parseInt(strArr[i]);
  // }
  // return sumOfArr;
}

console.log(addTwoDigits(292));
console.log(addTwoDigits(6909));
