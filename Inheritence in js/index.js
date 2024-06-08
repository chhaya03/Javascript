// Inheritance => Inheritance is passing down properties & methods from parent class to child class.


class parent {                        // parent class
    hello() {
        console.log("helloe!");
    }
}

class child extends parent {             // inheritade from parent class

}

let obj = new child();           // function call




// Example 

class Person {
    eat() {
        console.log("Eat");
    }
    sleep() {
        console.log("Sleep");
    }
}

class Engineer extends Person {          // child class inherited from person
    work() {
        console.log("Solve Problems,Build something");
    }
}

class Doctor extends Person {          // child class inherited from person
    work() {
        console.log("Treat patient");
    }
}


let chhaya = new Engineer();
let jack = new Doctor();