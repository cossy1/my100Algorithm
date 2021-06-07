
function nestedEvenSum (obj: Record<string, any>) {

}

let obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
};

console.log(nestedEvenSum(obj1));
