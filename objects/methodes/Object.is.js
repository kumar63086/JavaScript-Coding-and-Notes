
//This method checks whether two values are the same (like ===, but with special handling for NaN and -0).
console.log(Object.is(NaN, NaN));  // true
console.log(Object.is(0, -0));     // false
console.log(Object.is('1',1))