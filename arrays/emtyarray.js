let arrra=[]
const arr = [1, 2, 3, 4, "Hello", {name: "Vishal"}, [1,2,3], 4];
// let arr=new Array()
console.log(arr)
const firstElement = arr[6];

const arrLength = arr.length;
const lastElement = arr[arrLength - 1];
// console.log(firstElement, arrLength, lastElement);

const lastElement1 = arr.pop(); // O(1)
console.log(arr, lastElement1);

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
