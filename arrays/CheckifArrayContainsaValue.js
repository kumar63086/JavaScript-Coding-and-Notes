function containsValue(arr,value) {
    return  arr.includes(value);
}

// Example usage:
const items = ['apple', 'banana', 'orange'];
console.log(containsValue(items, 'banana')); // Output: true
console.log(containsValue(items, 'grape'));  // Output: false