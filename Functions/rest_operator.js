// rest operator (...)= rest operator is used to create an array from function parameters


// alone argument
function sum(...args) {
    console.log(args);
}

sum(5, 6, 2, 3, 4, 1);



// if multiple values in argument
function sum2(num, value, ...args) {
    console.log(args);
}

sum2(5, 6, 2, 3, 4, 1);    // 5 is stored in num, 6 is stored in value, rest is in array            