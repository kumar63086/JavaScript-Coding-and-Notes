console.log(1 +  "2" + "2"); // "12" + "2" = "122"
console.log(1 +  +"2" + "2"); // 1 +2 = 3 // 3 + "2" = "32"
console.log(1 +  -"1" + "2"); // 1 - 1 = 0 // 0 + "2" = "02"
console.log(+"1" +  "1" + "2"); // 1 + "1" = "11" + "2" = "112"
console.log( "A" - "B" + "2"); // Nan + "2" = "Nan2"
console.log( "A" - "B" + 2);// Nan + 2 = NaN
console.log('5'-'3'+6)//2+6=8
console.log('5'*'3'+6)//15+6=21
console.log(typeof null)//Object
console.log(typeof NaN)//number
console.log('5'*6+6)//30+6=36
console.log('4'+6*5)//'4+30=430
console.log('4'*'6'+5)//24+5=29
console.log([]==[])//false
//console.log([]===[])//false
console.log({}=={})//false
//console.log({}==={})//false
console.log([]=='')//true
// console.log('')//emtye
// console.log([])
console.log({}=='')//false
console.log(undefined==undefined)//true
console.log(undefined===undefined)//true
console.log(undefined==null)//true
console.log(undefined===null)//false
console.log(NaN==NaN)//false
console.log(NaN===NaN)//fal
console.log(NaN==null)//false
console.log('null')
console.log(null==null)//true
console.log(null===null)//true

console.log(isNaN(NaN)) //true
console.log('isNaN')
console.log(isNaN(1)) //false
console.log(isNaN('')) //false
console.log(isNaN('kumar')) //true

console.log(isNaN('true')) //true
console.log(isNaN(true)) //false
console.log(isNaN(undefined)) //true

console.log(isNaN({})) //true
console.log(isNaN([])) //flase
console.log(isNaN([1,2,3])) //true
console.log(isNaN(['apple','banana'])) //true
//0 == false   // true
//0 === false  // false
//1 == "1"     // true
//1 === "1"    // false
//null == undefined // true
//null === undefined // false
//'0' == false // true
//'0' === false // false
//[]==[] or []===[] //false, refer different objects in memory
//{}=={} or {}==={} //false, refer different objects in memory












