function Reverse(str){
     return str.split('').reverse('').join('')
}
console.log(Reverse('kumar'))

function revrese(str){
 let revered=''
 for(let st of str){
     revered = st+revered
 }
 return revered
}

console.log(revrese('kumar'))