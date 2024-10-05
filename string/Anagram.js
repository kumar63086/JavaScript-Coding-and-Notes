function Anagram(str1,str2){
    const a1=str1.split('').sort().join()
    const a2=str2.split('').sort().join()
    return a1===a2
}
console.log(Anagram('tea','eat'))