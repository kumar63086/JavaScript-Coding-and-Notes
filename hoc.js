const numbers = [1, 2, 3, 4, 5];
const map=numbers.map((e)=>e*2)
console.log(map)
const filer=numbers.filter((e)=>e>2)
console.log(filer)
const reduse=numbers.reduce((acc,cur)=>acc+cur,0)
console.log(reduse)

//retun function
function createMultiplier(multiplier){
 return function(num){
    return  num*multiplier
 }
}
const double= createMultiplier(2)
const triple=createMultiplier(3)
console.log(double(5))
console.log(triple(5))
