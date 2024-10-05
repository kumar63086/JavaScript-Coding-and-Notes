let person = {
    name: "kumar",
    sayMyName: function () {
      console.log(this.name);
    },
  };

  person.sayMyName()
   
  const person1={name:'Ramya'}
  person.sayMyName.call(person1)
  person.sayMyName.apply(person1)

  let obj = {
    firstname: "Kumar",
    lastname: "Borelli",
    getFullName: function () {
      console.log(this.firstname + " " + this.lastname);
    },
    address: {
      city: "Hyderabad",
      state: "Telagana",
      getAddress: function () {
        console.log(this.city + " " + this.state);
      },
    },
  };
  
  obj.getFullName();  // here value of this will be obj
  obj.address.getAddress();  // here value of this will be address
