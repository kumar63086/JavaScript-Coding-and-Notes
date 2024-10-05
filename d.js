let mis=[1,2,4,5,6]
function misingNumber(n){
    const sum =n.reduce((acc,cur)=>acc+cur)
    const ex= (n*(n+1))/2
    return ex-sum
}
console.log(misingNumber(mis))