null
Definition: null is an intentional assignment of a "no value" or "empty" value to a variable. It indicates the absence of any object value.
  undefined
Type: It is of type object
Definition: undefined is a variable that has been declared but has not been assigned a value.
Type: It is of type undefined.


  // null and undefined
// both are used to check absence of value but with slightly difference. 

// undefined
// 1. If we declare any variable and nothing assigned
// 2. If function doesn't return anything
// 3. If we try to access any property from object and that is not available


var a
console.log(a)

var obj= {}
console.log(obj.a)

function test(){

}

console.log(test())

// null is typically used when you want to explicitly indicate the absence of a value.

var b=null;
