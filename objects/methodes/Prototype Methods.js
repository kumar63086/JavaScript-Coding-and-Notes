function Person(name,age){
this.name=name
this.age=age

}

Person.prototype.greet=function(){
    console.log(`Helloo My  name is ${this.name} and ${this.age} yers old and ${this.gender}`)
}
// Creating new instances
const person1=new Person('Ramya',23)
const person2=new Person('Kumar',27)
// Adding new properties to instances
person1.gender='Female'
person2.gender='Male'

console.log(person1.name,person1.age,)
console.log(person2.name,person2.age,)
person1.greet()
person2.greet()