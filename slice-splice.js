const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

const slicemethod=fruits.slice(1,3)

console.log(fruits)
console.log(slicemethod)
let arr1= [1,2,3,4,5];
let arr2= arr1.slice(2,3)
console.log(arr2)
console.log(arr1)

//splice method
let arr3= [1,2,3,4,5,6]
let arr4=arr3.splice(2,3)
console.log(arr4)
console.log(arr3)

const fruitss = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
const removedFruits = fruitss.splice(1, 2);
console.log(removedFruits)
console.log(fruitss)
// Add new elements at index 1
fruits.splice(1, 0, 'Fig', 'Grape');
console.log(fruits)