
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
  }
  
  for (var j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 1000);
  }
  const obj = {
    name: "Alice",
    getName: function () {
      return () => this.name;
    },
  };
  
  const obj2 = {
    name: "Bob",
  };
  
  const getName = obj.getName();
  console.log(getName()); 
  console.log(getName.call(obj2));

  function Person(name) {
    this.name = name;
  }
  
  Person.prototype.getName = function () {
    return this.name;
  };
  
  const student = new Person('John');
  Person.prototype.getName = function () {
    return 'Updated name';
  };
  
  console.log(student.getName());