function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log('Hello, ' + this.name);
    };
}

const person1 = new Person('John', 30);
const person2 = new Person('Jane', 25);
console.log(person1.name)
console.log(person1.greet())

console.log(person2.name)
console.log(person2.greet())

