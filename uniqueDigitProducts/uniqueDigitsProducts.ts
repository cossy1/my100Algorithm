const uniqueDigitProducts = (a:number[]) => {
    let newArr: number[] = [];
    let splittedArr: any;

    for(let i=0; i<a.length; i++){

        if(a[i].toString().length > 1){
            let res: number = 1;
            splittedArr = a[i].toString().split('');
            for(let j=0; j<splittedArr.length; j++){
                res *= splittedArr[j];
            }
            newArr.push(res);

        }

        else {
            newArr.push(a[i]);
        }
    }

    let unique = newArr.filter((elem, index, self) => {
        return index === self.indexOf(elem);
    });

    return unique.length;
};

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));