
function flattenArray (arr){
//   return arr.flat(Infinity)
return arr.flat(2)
}
// Example usage:
const nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log(flattenArray(nestedArray))

