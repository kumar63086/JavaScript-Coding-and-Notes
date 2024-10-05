function palidram(str){
  const reveresd=str.toString().split('').reverse('').join('')
  return str.toString()===reveresd
}
console.log(palidram('121'))
console.log(palidram('mom'))
console.log(palidram(121))