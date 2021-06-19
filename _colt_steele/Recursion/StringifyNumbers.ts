function StringifyNumbers(obj: Record<string, any>) {
  for(let key in obj) {
    if (typeof obj[key] === 'object') {
      obj[key] = StringifyNumbers(obj[key])
    } else if(typeof obj[key] === 'number') {
      obj[key] = String(obj[key]);
    }
  }
  return obj
};

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};

console.log(StringifyNumbers(obj));
