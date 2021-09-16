/*function genNextOddFibo(seed1:number, seed2:number): number {
   let newSeed:number=seed1+seed2;
    if (newSeed%2===0){
            return genNextOddFibo(seed2, newSeed)    //Applied Conditional Recursion here!!!
    }else  return newSeed;
}*/

function genNextFibo(seed1:number, seed2:number): number {
    let newSeed:number=seed1+seed2;
    return newSeed;
}

function sumOddFibonacciNums(num: number): number {
 let s1:number=0;
 let s2:number=1;
 let nextFiboValue=genNextFibo(s1, s2);
    console.log(nextFiboValue);
 let sum:number=1;
 console.log(sum);

 while(nextFiboValue<=num){
     if (nextFiboValue%2===1){
         sum=sum+nextFiboValue;
         s1=s2;
         s2=nextFiboValue;
         nextFiboValue=genNextFibo(s1, s2);

     }else if(nextFiboValue%2===0){
         s1=s2;
         s2=nextFiboValue;
         nextFiboValue=genNextFibo(s1, s2);
     }
 }
   return sum
}

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));
console.log(sumOddFibonacciNums(8));
