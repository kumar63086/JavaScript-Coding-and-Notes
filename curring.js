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
const Arra = [1, 2, 3, 4, [3, 4, [6, 8], 9], 10];

function fallted(arr){
    return arr.reduce((acc,val)=>
     acc.concat(Array.isArray(val)?fallted(val):val),[]
    )
}
console.log(fallted(Arra))

const words=['kumar','srinuvas','praveen']
const longestwordslength=words.reduce((maxlength,word)=>{
    let currentlength=word.length
  return  currentlength > maxlength?currentlength:maxlength
},0)

console.log(longestwordslength)

const longestword=words.reduce((longestword,word)=>{
    return word.length>longestword.length?word:longestword
})
console.log(longestword)

