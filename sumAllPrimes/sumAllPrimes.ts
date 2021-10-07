function sumAllPrimes(num: number) {
    let arr: number[] = [];
    let newArr: number[] = [];

    for(let i=2; i<=num; i++){
        arr.push(i);
    }

    function isPrime(n: number){
        for(let i=2; i<n; i++){
            if(n%i === 0){
                return false;
            }
        }
        return true;
    }

    for(let j=0; j<arr.length; j++){
        if(isPrime(arr[j]))
            newArr.push(arr[j])
    }
    let ans = newArr.reduce((a, b) => a + b);

    return ans;

}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));