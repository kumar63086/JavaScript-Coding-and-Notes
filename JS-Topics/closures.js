function example1(){
    for (var i = 0; i < 3; i++) {
      setTimeout(function() { console.log(i); }, 1000 + i);
    }
  }
 // example1() //out put  3 3 3
  function example2() {
    for (var i = 0; i < 3; i++) {
      setTimeout((function() { 
        console.log(i) 
      })(), 1000 + i);
    }
  }
//   example2();//undefined
  function example3(){
    for (var i = 0; i < 3; i++) {
      setTimeout(function(k) { 
        return function() { console.log(k); } 
      }(i), 1000 + i);
    }  
  }
  example3()//012
  


  function init() {
    var name = 'Uncommon Geeks';
    function displayName() {
        alert(name);
    }
    displayName();
}
init();//out put Uncommon Greeks

