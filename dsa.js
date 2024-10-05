// function sumofNaturalnumber(num){
//     let sum =0
//     for(let i=0;i<=num;i++){
//         sum=sum+i
//     }
//     return sum
// }
// console.log(sumofNaturalnumber(5))//

// function add(n){
//     return n*(n+1)/2
// }
// console.log(add(5))

// //missing numbers
// function misingnumber(num){
//     const n=Math.max(...num)
//     const exptessum=n*(n+1)/2
//     const sum=num.reduce((a,b)=>a+b,0)
//     return exptessum-sum
// }
// let b=[1,2,4]
// console.log(misingnumber(b))

// //sum of digites of number

// function sumOfdigitnumber(num){
//     let sum=0
//     while (num>0) {
//           sum+=num%10
//           num=Math.floor(num/10)
//     }
//     return sum
// }
// console.log(sumOfdigitnumber(1287))


// var containesDuplicate=function(num){
//     var k=[...new Set(num)]
//     return k
// }
// let d=[1,2,1]
// console.log(containesDuplicate(d))
// //max number
// var max=[1,2,3,4,5,6,7,8,9]
// function Max(num){
//     const k=Math.max(...num)
//     return k
// }
// console.log(Max(max))

// //secound largest number
// function secoundlargestNumber(num){
//   const largest=Math.max(...num)
//   const secound=Math.max(...num.filter(e=>e!==largest))
//   return secound
// }
// console.log(secoundlargestNumber(max))

// //sum of the digit count
// function digitCount(num){
//     num =Math.abs(num)
//     let count=0
//      do {
//         count++
//         num=Math.floor(num/10)

//      } while (num>0);
//      return count
// }

// console.log(digitCount(1234567810))

// ///remove specific element
// let R=[1,2,3,4,5]
// let elementRemove=4
// const filterd=R.filter((e)=>e!==elementRemove)
// console.log(filterd)

// //Vowels
// function Vowels(str){
//     let vowels=str.match(/[aeiouAEIOU]/g)
//     return vowels?vowels.length:0
// }
// console.log(Vowels('kumar'))

// //
// function isAnagram(a,b){
//   const A=a.split('').sort().join()
//   const B=b.split('').sort().join()
//   return A===B
// }
// console.log(isAnagram('tea','eat'))

// //palidram
// function palidrom(str){
//   const reveresd=str.toString().split('').reverse().join('')
//   return str.toString()===reveresd
// }
// console.log(palidrom(121))

// //flat Array
// let arra=[1,2,3,[4,5],[6,7,[8,9]]]
// // const y=arra.flat(2)
// // console.log(y)

// function flatedArray(arr){
//  return arr.reduce((acc,val)=>{
//     return acc.concat(Array.isArray(val)?flatedArray(val):val)
//  },[])
// }
// console.log(flatedArray(arra))
// ///fibonacci number
// function fibonacciNumber(n) {
//     let a = 0;
//     let b = 1;
  
//     for (let i = 0; i < n; i++) {
//       let sum = a + b;
//       a = b;
//       b = sum;
//     }
  
//     return a;

//   }
//   console.log(fibonacciNumber(15))

//   //mising number [3,0,1] 1+0+3=4 1+2+3+0=6  6-4=2
//   let mi=[0,9,6,5,4,3,2,1]
//   function mising(nums){
//   //let sum=0
// //   for (let i = 0; i < nums.length; i++) {
       
// //     sum+=nums[i]
    
// //   }
//   return nums.length*(nums.length+1)/2-nums.reduce((acc,val)=>acc+val)
//   }
//   console.log(mising(mi))

// //Aarry  finde the  to last index of the element
// const lastindex=[1,2,3,4,5]
// const s=lastindex.length
// const x=lastindex[s-1]
// console.log(x)
// const Ra=[]
// const S=new Array(1,3)
// console.log(Ra)
// console.log(S)
///
const words = ['apple', 'banana', 'cherry', 'dragonfruit', 'elderberry'];

const longestword=words.reduce((maxlength,word)=>{
  currentlenth=word.length
  return currentlenth>maxlength?currentlenth:maxlength

},0)

console.log(longestword)

