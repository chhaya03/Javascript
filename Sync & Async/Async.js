// Asynchronous => Due to synchronous programming, sometimes imp instruction get blocked due to some previous instructions,
// which causes a delay in the UI.
// Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

console.log("One");
console.log("Two");

setTimeout(() => {
    console.log("Hello");
}, 2000);           //Timeout

console.log("Three");
console.log("Four");