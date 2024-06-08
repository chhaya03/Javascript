// Promise is for "eventual" completion of task. it is an object in js. it is a solution to callback hell.
// let promise =new Promise((resolve,reject)=>{.....})
// resolve and reject are callback provided by js
// in promise concepts, there is three states pending , resolve and reject .



let promise = new Promise((reject, resolve) => {

    console.log("I am a promise but leave me on pending state");

    // for pending  promise we dont need to invoke any function. 
});





let promise1 = new Promise((resolve, reject) => {
    console.log("I am a promise resolve me");

    resolve(123);                       // for  fulfilling promise we can invoke resolve function with random value. 
});





let promise2 = new Promise((resolve, reject) => {
    console.log("I am a promise but reject me");

    reject("Some error occurred");        // for  rejecting the  promise we can invoke reject function with random value. 
});


