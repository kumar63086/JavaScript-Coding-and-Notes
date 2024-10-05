// Question 1
function func() {
    // const a = b = c = 1
    const a = b  = 1
  }
  func()
  //console.log(typeof a, typeof b, typeof c) //out put  undefined number number
  console.log(typeof a, typeof b)//undefined number


  // Question 2: 
for (var i = 0; i < 5; i++) {
    setTimeout(function() { console.log(i); }, 1000); 
}
// out put 5 5 5 5 5

//  Question 3
sayOtherName()
//sayName()//TypeError: sayName is not a function
var sayName =() =>{
    console.log('hello world')
}
function sayOtherName(){
    console.log('world is beautiful')
}

// Question 2
(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
  })();//out put 1,4,3,2