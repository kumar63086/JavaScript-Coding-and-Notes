function sum (a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

console.log(sum(5)(6)(4))

//infinety curring javascript

function add (a){
    return function(b){
        if(b!==undefined){
          return add(a+b)
        }
        return a
    }
}

console.log(add(2)(3)(6)()); 11