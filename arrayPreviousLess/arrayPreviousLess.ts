function arrayPreviousLess(items: number[]): number[] {
  let arr=items.map((item, index, items)=>{
       let i=index-1;
       if (index===0)
       {
           return -1
       }
       else{
           while(i>=0){
               if (items[i]>item){
                   i=i-1;

               }
               else if(items[i]<item){
                 //  return item
                   return items[i]
               }
           }
             return -1
       }
   });

    return arr
}
console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
