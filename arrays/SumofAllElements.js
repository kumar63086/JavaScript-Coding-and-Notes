function sumArray(arr){
    return arr.reduce((acc,cur)=>acc+cur,0)
}

// Example usage:
const values = [1, 2, 3, 4, 5];
console.log(sumArray(values))