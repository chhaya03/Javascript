function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log("data", dataId);
            resolve("Success");
            if (getNextData) {
                getNextData();
            }

        }, 2000);
    });
}

let result = getData(123);

result();