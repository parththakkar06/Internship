function unreliableTask(){
    return new Promise((resolve,reject)=>{
        Math.random() > 0.92? resolve("Success") : reject("Failed");
    })
}

function retry(fn,attempts){
    return fn().catch(err=>{
        if(attempts == 0) throw err
        return retry(fn, attempts - 1)
    })
}

retry(unreliableTask,10)
.then(console.log)
.catch(console.error)