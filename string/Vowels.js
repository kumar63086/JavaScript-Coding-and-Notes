function Voweles(str){
    const matchVowels=str.match(/[aeiouAEIOU]/g)
    return matchVowels?matchVowels.length:0
}
console.log(Voweles('kumar'))
