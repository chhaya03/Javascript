// if any probability of error in block of code so we will put that block of code in try block and errors will go in catch block and catch block throws error in form of alert


let person = {
    fname: 'chhaya',
    lname: 'mishra',
    get fulName() {

        return `${person.fname}  ${person.lname}`;
    },

    set fulName(value) {
        let parts = value.split(' ');
        this.fname = parts[0];
        this.lname = parts[1];
    }

}

console.log(person.fulName);


try {
    person.fulName = true;
    console.log(person.fulName);
}
catch {
    alert("You have not sent a string");
}



// Example

let a = 5;
let b = 6;

console.log("sum of a and b is=", a + b);
console.log("sum of a and b is=", a + b);
try {
    console.log("sum of a and b is=", a + c);
}
catch (err) {
    console.log("found an error");
}
console.log("sum of a and b is=", a + b);
console.log("sum of a and b is=", a + b);
