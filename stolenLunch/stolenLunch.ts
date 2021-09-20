function stolenLunch(note: string) {
    const alphabet: string[] = ["a","b","c","d","e","f","g","h","i","j"];
    let a: any = note.split('');
    let res: string;

    for(let i=0; i<a.length; i++){
        if(parseInt(a[i])){
            let point = a.indexOf(a[i])
            a[point] = alphabet[parseInt(a[i])]
        }

        else if(!parseInt(a[i])){
            if(alphabet.includes(a[i]))
                a[i] = alphabet.indexOf(a[i]);
        }

    }

    res = a.join('');

    return res;
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));
console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));