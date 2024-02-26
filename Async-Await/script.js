// We have read callback hell, Promises chain and these both concepts more diificult to use so in sense of easier these both concept 
// we can use Async-await (tough term: callback hell>Promise chain>Async-Await)
// Async-Await => async function always returns a promise
// async function myFunc(){......}
// await pauses the execution of its surrounding async function until the promise is settled .


function API(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather data", dataId);
            resolve(200);
        }, 3000);  // 3 sec
    });
}


async function getWeatherData() {          // await is only valid in async functions so we have to define async function 

    console.log("getting data1.......");
    await API(1);  // 1st call
    console.log("getting data2.......");
    await API(2);  // 2nd call
    console.log("getting data3.......");
    await API(3);
}