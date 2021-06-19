function CollectStrings(obj: Record<string, any>): Array<string> {
  let array = [];
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      array = array.concat(CollectStrings(obj[key]));
    } else if (typeof  obj[key] === 'string') {
      array.push(obj[key])
    }
  }
  return array
};

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
};

console.log(CollectStrings(obj));

