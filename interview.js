function abc(){
    console.log('kumar')
    return 8
}
console.log(abc(),xyz()) //output kumar 8 16

function xyz(){
    
    return 16
}


function abc(){
    console.log('kumar')
    return 8
}


function xyz(){
    
    return 16
}

var a=(abc(),xyz())
console.log(a) //outpt kumar 16



function add (a){
    return function(b){
        if(b!==undefined){
            return  add(a+b)
        }else{
          return a  
        }
    }
    
}
console.log(add(1)(2)(3)()) outpt //6


function add (a){
    return function(b){
        return a+b
    }
    
}
console.log(add(1)(2)) output//3

const d = [1, 2, [3, 4, [5, 6, [7, 8]]]];
const arr = d.flat(Infinity);
console.log(arr)


const d = [1, 2, [3, 4, [5, 6, [7, 8]]]];

function flat(arr){
return arr.reduce((acc,val)=>Array.isArray(val)?acc.concat(flat(val)):acc.concat(val),[])

}
const x=flat(d)
console.log(x)


const arr=[[1,2,3],[4,5,6],[7,8,9]]
const result= arr.flat(3)
console.log(result)


const obj={ 
    a:1,
    b:2,
    c:3,
    a:4,
    b:6
}
 
console.log(obj)//output { a: 4, b: 6, c: 3 }

const obj={ 
    a:1,
    b:2,
    c:3,
    'a':4,
    'b':6
}

console.log(obj) output { a: 4, b: 6, c: 3 }


const obj = {
  name: "John",
  age: 30
};

 Object.freeze(obj)
const Ob=obj
Ob.name='kumar'
Ob.city='hyderabad'
console.log(obj)


const obj = {
  name: "John",
  age: 30
};

Object.seal(obj);

obj.age = 35;  // Modifying an existing property works
obj.address = "123 Main St";  // Adding new properties will not work
delete obj.name;  // Deleting a property will not work

console.log(obj);  // Outputs: { name: "John", age: 35 }


function abc(a,b){
    if(a<b){
        console.log(`b is greter then`)
    }else{
      console.log(`a is greter then`)  
    }
    return ;
    console.log(a+b)
    
}
console.log(abc(8,9))
console.log(abc(10,9)) // output b is greter then undefined a is greter then undefined

