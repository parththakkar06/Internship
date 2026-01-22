console.log("First")

setTimeout(() => {
    console.log("Second")
}, 0);

Promise.resolve().then(()=>console.log("Third"))

process.nextTick(()=>console.log("Fourth"))

console.log("Fifth")

// sync will always run first , i.e , First followed by Fifth
// process.nextTick runs before the microtasks run (Promises) , i.e , Fourth
// Promise will run before the macrotasks run (settimeout) , i.e , Third
// MacroTasks always runs the last (Timer phase)

