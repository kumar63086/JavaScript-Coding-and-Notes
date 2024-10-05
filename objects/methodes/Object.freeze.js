//This method freezes an object, making it immutable (i.e., properties cannot be added, removed, or modified).
const person = { name: 'John', age: 30 };
Object.freeze(person);
person.age = 31;  // Cannot modify the object
console.log(person.age);  // 30
person.city='hyderbad' //cannot add the object
console.log(person.city)
delete person.name //cannot delete the object
console.log(person.name)


