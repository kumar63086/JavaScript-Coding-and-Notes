const person = {
    name: 'Alice',
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
  
//   const greet = person.greet;
//   greet(); //out put is  Hello, my name is undefined
person.greet() //Hello, my name is Alice