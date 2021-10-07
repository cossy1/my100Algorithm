function sortByLength(inputArray: string[]) {

    let res = inputArray.sort((a: any, b: any)  => a.length - b.length);

    return res;
}

console.log(sortByLength(["abc",
    "",
    "aaa",
    "a",
    "zz"]));