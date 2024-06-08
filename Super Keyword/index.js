// Super keyword => The super keyword is used to call the constructor of its parent class to access the parent's properties and methods .

class person {
    eat() {
        console.log("Eat");
    }

    sleep() {
        console.log("Sleep");
    }
}



class Engineer extends person {

    work() {
        super.eat();       // to invoke parent class constructor
        console.log("Solve problems,build something")
    }
}

let chhaya = new Engineer();