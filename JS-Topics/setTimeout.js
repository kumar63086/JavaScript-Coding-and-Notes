(function() {
  console.log(1); 
  setTimeout(function(){console.log(2)}, 1000); 
  setTimeout(function(){console.log(3)}, 0); 
  console.log(4);
})(); 
//out put 1 4 3 2

console.log('Message no. 1');
 
setTimeout(function() {

   console.log('Message no. 2');

}, 0);
 
var promise = new Promise(function(resolve, reject) {

   resolve();

});

promise.then(function(resolve) {

   console.log('Message no. 3');

})

.then(function(resolve) {

   console.log('Message no. 4');

});

console.log('Message no. 5');

//out put Message no. 1
//Message no. 5
//Message no. 3
//Message no. 4
//Message no. 2


function timeOut() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i); // What is logged?
        }, 1000);
    }
}
timeOut() // out put 333

// Questions 6:
(function immediateA(a) {
    return (function immediateB(b) {
        console.log(a); // What is logged?
    })(1);
})(0); //out 0