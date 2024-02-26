// class is a program-code template for creating object.
// those objects will have some state (variable) and some behavior (function) inside it.

class ToyotaCar {

    constructor(brand, mileage) {                  // constructor for creating new objects
        console.log("Creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }


    start() {
        console.log("start");
    }                                         //in class, we dont need to seperate functions by using comma 



    stop() {
        console.log("stop");
    }


}



let fortuner = new ToyotaCar("fortuner", 10);  //constructor 
console.log(fortuner);
let lexus = new ToyotaCar("lexus", 20);         //constructor 
console.log(lexus);

