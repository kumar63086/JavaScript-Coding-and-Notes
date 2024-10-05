//This method seals an object, preventing new properties from being added, but allows modification of existing properties.
const person = { name: 'John', age: 30 };
Object.seal(person);
person.age = 31;  // Can modify existing property
console.log(person.age);  // 31
person.address = 'New York';  // Cannot add new property
console.log(person.address);  // undefined
delete person.name
console.log(person.name)