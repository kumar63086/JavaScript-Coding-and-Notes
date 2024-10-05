//speard operatore
const array=[1,2,3,4,5,6]
console.log(...array)
//arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const copyarray=[...arr1]
console.log(copyarray)
const combinedArr=[...arr1,...arr2]

//objects
const obj={a:1,b:2}
const obj2={c:3,d:4}
const copyobj={...obj}
console.log(copyobj)
const combinedobj={...obj,...obj2}
console.log(combinedobj)

 //passing multiple arrugments
const number=[1,2,3,4,5]
function sum(a,b,c,d,e){
    return a+b+c+d+e
}
console.log(sum(...number))


// Rest in Function Parameters
console.log('rest')
function add(...adds){
    return adds.reduce((acc,cur)=>acc+cur)
}
console.log(add(1,2,3))
console.log(add(3,7,8,9))

//Rest in Array Destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]
//Rest in Object Destructuring
const person = { name: 'John', age: 30, city: 'New York', country: 'USA' };

const { name, ...otherInfo } = person;

console.log(name);       // Output: John
console.log(otherInfo);  // Output: { age: 30, city: 'New York', country: 'USA' }

