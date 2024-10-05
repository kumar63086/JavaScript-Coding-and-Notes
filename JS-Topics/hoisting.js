func1()
func2()//TypeError: func2 is not a function
//function declaration
var func2 =() =>{
    console.log('I will subscribe to geeksForGeeks')
}
//function expresion
function func1(){
    console.log('Welcome to GeeksforGeeks')
}

var ac
console.log(ac)//undefinde


console.log(a)// undefinde
var a=10
console.log(b)//ReferenceError: Cannot access 'b' before initialization
const b=10


console.log(d)//ReferenceError: Cannot access 'b' before initialization
let d=20

function test(){
    var x  = 10;
    var x;
    console.log('X is ' + x);
}
test(); //out put x is 10
function varTest() {
    var x = 1;
    {
        var x = 2;  
        console.log(x);  
    }
    console.log(x); 
}
varTest() // out 2 ,2 


// function letTest() {
//     let x = 1;
//     let x = 2;
//     console.log(x); 
//     console.log(x);
// }
// letTest() //x is aleredy declared

// Question 4
function do_something() {
    console.log(bar); 
    var bar = 111;
    console.log(bar);
}
do_something()//out undefind and 111

// Question 5
var rat = 10
function getRate() {
  if (rat === undefined) {
      var rate = 6;
      return rate;
   } else {
      return 10;
   }
}
console.log("Rate is", getRate()); // Rate is 10