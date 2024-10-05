const Mypromise=new Promise((reslove,reject)=>{
  setTimeout(()=>{
    reslove('success')
  },300)
  setTimeout(()=>{
    reject('failure')
  },3000)
})
Mypromise.then((message)=>{
  console.log(message)
}).catch((erorr)=>{
  console.log(erorr)
}).finally(()=>{
  console.log("This will run regardless of the outcome");
})
const fetchFromAPI1 = new Promise((resolve, reject) => setTimeout(() => resolve("API1 data"), 1000));
const fetchFromAPI2 = new Promise((resolve, reject) => setTimeout(() => reject("API2 failed"), 500));
const fetchFromAPI3 = new Promise((resolve) => setTimeout(() => resolve("API3 data"), 1500));

// Promise.all - Wait for all data (or handle failure)
Promise.all([fetchFromAPI1, fetchFromAPI2, fetchFromAPI3])
  .then((data) => console.log("All data:", data))
  .catch((error) => console.error("One API failed:", error));

// Promise.race - Get the fastest result (resolve or reject)
Promise.race([fetchFromAPI1, fetchFromAPI2, fetchFromAPI3])
  .then((data) => console.log("First response:", data))
  .catch((error) => console.error("First failure:", error));

// Promise.any - Get the first successful result
Promise.any([fetchFromAPI1, fetchFromAPI2, fetchFromAPI3])
  .then((data) => console.log("First successful response:", data))
  .catch((error) => console.error("All failed:", error));

// Promise.allSettled - See the outcome of all promises
Promise.allSettled([fetchFromAPI1, fetchFromAPI2, fetchFromAPI3])
  .then((results) => console.log("All settled:", results));

//Simulating an API Call with Promises
function FecthData(){
 return new Promise((reslove,reject)=>{
  
   setTimeout(()=>{
    const success = true;
    if(success){
      reslove("Data fetched successfully!")
    }else{
      reject("Data fetched successfully!")
    }
   },2000)
 })
}

FecthData().then((message)=>{
  console.log(message)
}).catch((erorr)=>{
console.log(erorr)
}).finally(()=>{
  console.log("This will run regardless of the outcome")
})

// Chaining Promises:

  FecthData()
  .then((data) => {
    console.log(data);
    return "Next step data"; // Pass value to the next `.then()`
  })
  .then((nextData) => {
    console.log(nextData); // "Next step data"
  })
  .catch((error) => {
    console.error(error); // Handle errors in any of the steps
  });

const promise1 = Promise.resolve(10);
const promise2 = new Promise((resolve,reject) => setTimeout(resolve, 1000, 20));
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // [10, 20, 30]
  })
  .catch((error) => {
    console.error(error);
  });


//Promise.race()  Resolves/rejects as soon as the first promise in the iterable resolves or rejects. 
//Doesn't wait for other promises.
const p1 = Promise.reject("Error 1");
const p2 = Promise.reject("Error 2");
const p3 = Promise.resolve("Success!");

Promise.any([p1, p2, p3])
  .then((result) => {
    console.log(result);  // Output: "Success!"
  })
  .catch((error) => {
    console.log(error);  // Won't run since one promise resolved
  });

//Promise.allSettled()
  const p11 = Promise.resolve("Success 1");
  const p22 = Promise.reject("Error 2");
  const p33 = Promise.resolve("Success 3");
  
  Promise.allSettled([p11, p22, p33])
    .then((results) => {
      console.log(results);
      // [
      //   { status: "fulfilled", value: "Success 1" },
      //   { status: "rejected", reason: "Error 2" },
      //   { status: "fulfilled", value: "Success 3" }
      // ]
    });