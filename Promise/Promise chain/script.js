
function asyncFunc1() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("Data1");
            resolve("success");
        }, 4000);
    });
}





function asyncFunc2() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("Data2");
            resolve("success");
        }, 4000);
    });
}




// this code executes data1 & data2 at same time (together)
// console.log("fetching data1....");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log("data1 resolved", res);
// });



// console.log("Fetching data2.....");
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log("data2 resolved", res);
// });






// but i want every data to excute after 4s one after one .
// so can be used promise chaining

console.log("Fetching data1.....");
asyncFunc1().then((res) => {
    console.log("data1 resolved", res);         // value of data (usually we don't need to print data value)
    console.log("fetching data2....");
    asyncFunc2().then((res) => {
        console.log("data2 resolved", res);      // value of data (usually we don't need to print data value)
    });
});