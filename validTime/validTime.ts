function validTime(time: string) {
    let res: boolean = false;
    let newTime = time.split(":");

    if((parseInt(newTime[0]) >= 0 && parseInt(newTime[0]) <=23) && parseInt(newTime[1]) >= 0 && parseInt(newTime[1]) <=59)
        res = true;

    return res;

}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));