// pureFunctions.js

// A pure function: It always returns the same output for the same input and has no side effects.
function add(a, b) {
    return a + b;
}

// Another pure function: Square of a number
function square(x) {
    return x * x;
}

// Pure function: Concatenating two strings
function concatenate(str1, str2) {
    return str1 + str2;
}

// Pure function: Returning a new array without modifying the original
function addElementToArray(arr, element) {
    return [...arr, element];  // returns a new array with added element
}

// Pure function: Summing an array
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

// Test the pure functions
console.log(add(2, 3)); // 5
console.log(square(4)); // 16
console.log(concatenate("Hello", " World!")); // "Hello World!"
console.log(addElementToArray([1, 2, 3], 4)); // [1, 2, 3, 4]
console.log(sumArray([1, 2, 3, 4])); // 10

