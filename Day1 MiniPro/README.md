This project demonstrates how Node.js executes the code using the event loop.

KEY POINTS :-
--> JS runs on a Single Thread , I/O operations runs on background thread
--> Uses Event Driven concurrency
--> Synchronous Code blocks everything
--> Async callbacks still waits for the event loops
--> process.nextTick runs before the promise microtask
--> Timers never run "Immediately"
--> I/O completion doesn't mean callback execution

Node.js is efficient for I/O bound tasks , not for CPU bound tasks.