function findEmailDomain (email:string):string {

    let index = email.lastIndexOf('@');
    return email.slice(index);
   
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));
