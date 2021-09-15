function sumOfTwo(a: number[], b: number[], v: number) {
    let res: boolean = false;

    for(let i=0;i<a.length; i++){
        for(let j=0; j<b.length; j++){
            if(a[i] + b[j] === v)
                res = true;
        }
    }

    return res;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));