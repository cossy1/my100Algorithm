function largestNumber(n: number): number {
    let numStr="";
    for (let i=0; i<n; i++){
        numStr=numStr+"9"
    }
    return parseInt(numStr)
}

console.log(largestNumber(2));
