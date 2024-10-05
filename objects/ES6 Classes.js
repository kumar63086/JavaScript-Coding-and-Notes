class person{
    constructor(name,age,city){
        this.name=name
        this.age=age
        this.city=city
        
    }
    getfullDetails(){
        console.log(` Helloo  My ${this.name} and ${this.age} Years old  City  ${this.city}`)
    }
    
}
const person1=new person('Kumar',27,'Boduppal')
const Person2=new person('Ramya',23,'Hyderabad')
console.log(person1.getfullDetails())
console.log(Person2.getfullDetails())
