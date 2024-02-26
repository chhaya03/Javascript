// Object => A javascript object is an enity having state and behavior (Properties and method).
// Prototype in js => JS objects have a special property called prototype .
// We can set ptototype using _ _proto_ _


const student = {                              // first type of object making

    fulName: "Chhaya mishra",
    marks: 94.8,

    printMarks: function () {                    // function

        console.log("marks=", this.marks);        // this keyword => used in same object 
    }
}



// for creating prototype

const employee = {                     // object

    calcTax() {
        console.log("tax rate is 10%");
    },
};

const lara = {               // Employee
    salary: 50000,
};

const jimmy = {
    salary: 20000,
};


lara__proto__ = employee;   // Prototype
jimmy__proto__ = employee;    //prototype


// it means if we want use a object with multiple objects so can apply prototype method .