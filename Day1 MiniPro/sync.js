console.log("Start");

HeavySync = () =>{
    for(let i = 0; i < 1e9; i++){}
};

HeavySync();

console.log("End");

// sync executes from top to bottom 
// RULE - everything stops until the sync code finishes
// No Async hatch can join / break inside the sync code