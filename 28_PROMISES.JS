const promiseone=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async task is completed")
        resolve()
    },1000)
   
    
})
promiseone.then(()=>{
    console.log("accepted")
})