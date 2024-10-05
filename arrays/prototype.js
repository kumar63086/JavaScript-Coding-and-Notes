Array.prototype.myUseCase = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
    return this; // Return the modified array
};

var fruits = ['Banana', 'Apple', 'Orange'];
var result = fruits.myUseCase(); // The array is modified and returned
console.log(result); // Logs: ['BANANA', 'APPLE', 'ORANGE']
