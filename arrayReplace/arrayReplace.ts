
function arrayReplace(array: number[], elemToRep: number, subElem:number) {
    for(let i = 0; i < array.length; i++) {
    
        if(array[i]  === elemToRep) array[i] = subElem;
    
    
    }
    console.log(array);
    
    }
    let inputArray = [1, 2, 1]; let  elemToReplace = 1; let  substitutionElem = 3;
    
    arrayReplace(inputArray, elemToReplace, substitutionElem);