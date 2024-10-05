//Reverse string
function reveresdsring(str){
    let reveresd=''
  for (const chr of str) {
       reveresd =chr+reveresd
  }
  return reveresd
}

console.log(reveresdsring('hello'))

//onther way write 
function reveresd(str){
 return str.split('').reverse('').join('')
}
console.log(reveresd('heloo'))

//finde missing number
let mis=[1,2,4,5,6]
function misingNumber(nums){
    return nums.length*(nums.length+1)/2-nums.reduce((acc,cu)=>acc+cu)
}
console.log(misingNumber(mis))

//ontherway write code 
let miss=[1,2,4,5,6]
function MissingNumber(number){
    let sum=0
    for (let i = 0; i < number.length; i++) {
        
         sum+=sum[i]
    }
    return number.length*(number.length+1)/2-sum
}

console.log(misingNumber(miss))

//logest words
const words = ['apple', 'banana', 'cherry', 'dragonfruit', 'elderberry'];

const longestwordlength=words.reduce((maxlength,word)=>{
    const currentlenth=word.length
    return currentlenth>maxlength?currentlenth:maxlength
},0)
console.log(longestwordlength)


//secound larjest number
const secoundlargestNumber=[0,1,2,3,4,5,6,7]
const largest=Math.max(...secoundlargestNumber)
 const S= Math.max(...secoundlargestNumber.filter((e)=>e!==largest))
 console.log(S)
 //number palindrom
 function palidrom(Num){
    const num=Num.toString().split('').reverse().join('')
    return num.toString()==Num
 }
console.log(palidrom('121'))
console.log(palidrom('mom'))
console.log(palidrom('dad'))
console.log(palidrom(121))
//string palindrom
console.log('string palindrom')
function StringPalidrom(str){
    const revese= str.split('').reverse().join('')
    return revese==str
}
console.log(StringPalidrom('mom'))
console.log(StringPalidrom('racecar'))
console.log(StringPalidrom('121'))
console.log(StringPalidrom('ramya'))

///anaragram
console.log('ANAGRAM');
function Annagram(st1,st2){
    const A=st1.split('').sort().join('')
    const B=st2.split('').sort().join('')
 return A===B
}
console.log(Annagram('tea','eat'))

//onterway to write 
function ANAGRAM(string1,string2){
 const chra1=string1.toLowerCase().replace(/[a^-z]/g,'')
 const char2=string2.toLowerCase().replace(/[a^-z]/g,'')
 return chra1===char2
}

console.log(ANAGRAM('part','trap'))
//write a program to finde the  given  prime number given range 2-10
console.log('prime')
function isPrime(num) {
    if (num < 2) return false; // Numbers less than 2 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) { // Only check up to the square root of the number
        if (num % i === 0) return false; // If divisible by any number other than 1 and itself, it's not prime
    }
    return true; // If no divisors were found, it's prime
}
console.log(isPrime(4))
//
console.log('checkEvenor0dd')
function checkevenOdd(num){
 if (num%2==0) {
     return `${num} is even`
 } else {
    return `${num} is odd` 
 }
}
console.log(checkevenOdd(2))
console.log(checkevenOdd(7))
// write program check the print odd number even in Array
console.log('write program check the print odd number even in Array')
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function  printEvenOddFromArray(arra){
    let evens=[]
    let odds=[]
    for (const  num of arra) {
        if (num%2==0) {
             evens.push(num)
        } else {
            odds.push(num)
        }
    }
    console.log("Even numbers:", evens);
    console.log("Odd numbers:", odds);
}
console.log(printEvenOddFromArray(numbers))

//Remove Duplicate numbers
console.log('Remove  the Duplicate numbers')
const ARRAY1=[0,3,4,4,4,3,2,2,1,0,]
const Remove=[...new Set(ARRAY1)]
console.log(Remove)
// Remove the space
console.log('Remove the space')
// const str=`Follow Code Yatra`


const str = "Kumar is Best Frontend Developer. Kumar is Best Developer. ";
const Removespace=str.replace(/\s+/g, '')
console.log(Removespace)
//Length of a String
console.log('Length of a String')
let firstName = "Kumar";
console.log(firstName.length);
console.log(firstName.charAt(4))
console.log(firstName[2])
function fibo(n){
    if(n < 2){
        return n;
    }
    return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(5));

//finding the sum of natural numbers
console.log('finding the sum of natural numbers')
function sumnatural(nums){
    let sum=0
    for (let i = 0; i <=nums; i++) {
         sum  = sum+i
        
    }
    return sum
}
console.log(sumnatural(5))
console.log(sumnatural(10))

//sum of digit number 
console.log('sum of digit number')
function Sumof(num){
    let sum=0
    while (num>0) {
         sum +=num%10
         num=Math.floor(num/10)
    }
    return sum
}
console.log(Sumof(1287))