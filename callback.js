function greeting(callback){
    setTimeout(()=>{
        console.log('Hello world..!')
        callback()
    },2000)
}
function aftergting(){
    console.log('after geeting message')
}
greeting(aftergting)