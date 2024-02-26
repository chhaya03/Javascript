// Calback hell => Nested callbacks stacked below one another forming a pyramid structure .(Pyramid or doom)
// This style of programming becomes difficult to understand and manage .

//Callbacks nesting

function getData(dataId, getNextData) {
    //2s

    setTimeout(() => {
        console.log("data", dataId);
    }, 2000);

    getNextData();
}



// Callback hell

getData(1, () => {                 // for executing all the data after 2s one by one.
    console.log("getting data2....");
    getData(2, () => {
        console.log("getting data3....");
        getData(3);
    });
});




// Callbacks hell is problem in programming that's why we use promises concept in js for tackling callback hell .