const Person=new Object()
Person.name='kumar'
Person.age=27
Person.greet=function(){
    console.log('Helloo',this.name)
}
console.log(Person.age)
console.log(Person.name)
console.log(Person.greet())
