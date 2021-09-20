function sumOddFibonacciNums(num: number) {
    let resArr:number[] = [1, 1];

    for(let i=0, j=i+1; i<=resArr.length, j<resArr.length; i++, j++){
        let val = resArr[i] + resArr[j];
        if(val < num)
            resArr.push(val)
    }

    let ans = resArr.filter((element) => element % 2 !== 0).reduce((a, b) => a + b);


    return ans;

}

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));