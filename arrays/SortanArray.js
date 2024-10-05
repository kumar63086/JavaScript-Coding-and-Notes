function sortArray(arr) {
    //return arr.sort((a, b) => a - b);
    return arr.sort((a,b)=>b-a)
}

// Example usage:
const unsorted = [5, 3, 8, 1, 2];
console.log(sortArray(unsorted)); // Output: [1, 2, 3, 5, 8]
