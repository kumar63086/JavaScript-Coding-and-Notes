A clouser is function that access to its own scope and the scope of the outer function have returned,


var a=5
function outer(){
    var b=6
    function inner(){
        var c=10
        console.log(a+b+c)
    }
    inner()
}
outer()

function test1(x){
    return function test2(y){
         return x+y;
     }
 }
 console.log(test1(2)(3))


 
function createPerson(name,age){
    //private variables
    let privateName = name;
    let privateAge = age;
 
    //private method
    function isAdult(){
        return age>=18;
      }
 
     //public methods with closure access to private variables and private methods
     return {
         getName : function(){
             return privateName;
         },
         getAge : function(){
             return privateAge
         },
         setName : function(name){
             privateName = name
         },
         setAge : function(age){
             privateAge = age;
         },
         isAdult : isAdult
     }
   }
 
   let person = createPerson('Bittu',21)
   console.log(person.privateAge) //undefined as not allowed to access private variable
   console.log(person.getName());  // Bittu
   console.log(person.getAge());   // 21
   console.log(person.isAdult());  // true
