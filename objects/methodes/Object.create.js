const parentObj = { greet: function() { console.log('Hello'); } };
const childObj = Object.create(parentObj);
childObj.name = 'John';
childObj.greet();  // 'Hello', inherited from parentObj
console.log(childObj.name)

// Define a prototype object
const personPrototype = {
    greet: function() {
        console.log(`Hello, my name is ${this.name} and ${this.age} years old`);
    }
};

// Create a new object with 'personPrototype' as its prototype
const person1 = Object.create(personPrototype);
person1.name = 'John';
person1.age = 30;

person1.greet();  // Output: Hello, my name is John
