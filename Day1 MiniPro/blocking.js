setTimeout(() => {
    console.log("Finished Timer");
}, 0);


const start = Date.now();

while (Date.now() - start < 3000) {
    
}

console.log("Loop Completed");

// here event loop can not run because the sync loop is blocking it
// Timer finishes only when the loop is done
// one bad loop condition can make the program go infinite