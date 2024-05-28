// Synchronous => Ocuuring at the same time 

// Event loop => JavaScript has a runtime model based on an event loop, which is responsible for executing the code,
// collecting and processing events, and executing queued sub-tasks. 


console.log("Hi!");

setTimeout(function timeout() {
    console.log("Click the button!");
}, 5000);

console.log("Welcome to loop.");