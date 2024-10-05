const target = { a: 1 };
const source = { b: 2, c: 3,a:2 };
const result = Object.assign(target, source);
console.log(result);  // { a: 2, b: 2, c: 3 }
//This method copies all enumerable own properties from one or more source objects to a target object, and returns the modified target object