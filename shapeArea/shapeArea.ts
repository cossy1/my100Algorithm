
function shapeArea(n: number): number {
    let box_stand=1;
    let total=1;
    for (let i=1; i<n; i++){
        box_stand=box_stand+2;
        total=total+box_stand;
    }
    return 2*total-box_stand;

}

console.log(shapeArea(2));
console.log(shapeArea(3));

