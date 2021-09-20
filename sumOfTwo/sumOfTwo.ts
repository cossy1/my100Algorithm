function sumOfTwo(a: number[], b: number[], v: number) {
    let res: boolean = false;
    let obj: Record<any, any> = {};
    let difference: number;
    const arr: number[] = a.concat(b);

    for(let i=0; i<arr.length; i++){
        difference = v - arr[i];

        if(obj[difference])
            return true;
        else{
            obj[arr[i]] = true;
        }
    }

    return res;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 70));
