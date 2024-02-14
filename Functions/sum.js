function sum(a, b) {
    return a + b;
}

console.log(sum(5, 6));
console.log(sum(5));           // not supported 
console.log(sum(5, 2, 8, 6, 3));  // only input values are 5 and 2








// sum function using loop

function add() {          // arguments=add()
    let total = 0;
    for (let value of arguments)           //for of  loop
        total = total + value;
    return total;
}

console.log(add(5, 6, 2, 1, 3));   //parameter





// sum in array using reduce method

let arr = [1, 2, 3, 4];

let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log("Printing total sum of array = ");
console.log(totalSum);