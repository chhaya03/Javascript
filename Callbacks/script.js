// Callbacks => A callback is a function passes as an argument to another function .

function Sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(1, 2, Sum);