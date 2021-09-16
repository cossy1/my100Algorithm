
/*function genNextFibo(seed1:number, seed2:number): number {
    let newSeed:number=seed1+seed2;
    return newSeed;
}

function sumOddFibonacciNums(num: number): number {
 let left_seed:number=0;
 let right_seed:number=1;
 let nextFiboValue=genNextFibo(left_seed, right_seed);
 let sum:number=1;
 while(nextFiboValue<=num){
     if (nextFiboValue%2===1){
         sum=sum+nextFiboValue;
         left_seed=right_seed;
         right_seed=nextFiboValue;
         nextFiboValue=genNextFibo(left_seed, right_seed);

     }else if(nextFiboValue%2===0){
         left_seed=right_seed;
         right_seed=nextFiboValue;
         nextFiboValue=genNextFibo(left_seed, right_seed);
     }
 }
   return sum
}*/

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));
console.log(sumOddFibonacciNums(8));
