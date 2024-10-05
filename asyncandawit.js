async function myfunction() {
    return 'helloworld'
}
console.log(myfunction())

async function Mypromise() {
     return Promise.resolve('Helloo..!')
} 

Mypromise().then((result)=>{
 console.log(result)
}).catch((erorr)=>{
 console.log(erorr)
})
console.log(Mypromise())


async function  fetchdata() {
     try {
        const res= await fetch('https://jsonplaceholder.typicode.com/users')
        const data= await res.json()
        data.map((e)=>console.log(e.address.city))
     } catch (error) {
        console.log(error)
     }
}
console.log(fetchdata())

const DATA= async ()=>{
     try {
        const response=await fetch('https://jsonplaceholder.typicode.com/posts')
        const data= await response.json()
        // console.log(data)
        data.map((e)=>console.log(e.title))
     } catch (error) {
         console.log(error)
     }
}
console.log(DATA ())