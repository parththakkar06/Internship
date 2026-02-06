const fs = require("fs");

console.time("read");
fs.readFile("bigFile.txt", ()=>{
    console.timeEnd("read");
})

console.time("loop");
for(let i = 0 ; i < 112 ; i++){}
console.timeEnd("loop");


// file will always be read after the loop ends even if the disk task is done before it.
// I/O happens in background threads
// Event loop is blocked by CPU loop
// callback needs the event loop
