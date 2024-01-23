console.log('chaliye shuru krte hai ');

// object create

// . (dot operator) is used for find value in inspects like rectangle.length is 1 
let rectangle = {
    length: 1,
    breadth: 2,


    // behaviour is added by draw function
    draw: function () {
        console.log('drawing rectangle');
    }

};


// object creation by two types of functions 1: Factory function, 2: Construction function

// factory function

function createRectangle() {

    return rectangle = {
        length: 1,
        breadth: 2,


        draw: function () {
            console.log('drawing rectangle');
        }

    };

}

// now call the function by storing in another function

let rectangleobj1 = createRectangle();
console.log(rectangleobj1);
console.log(rectangleobj1.length);
console.log(rectangleobj1.breadth);

// we can use same code like this

function createRectangle(len, bre) {
    return rectangle = {
        length: len,
        breadth: bre,


        draw: function () {
            console.log('drawing rectangle');
        }

    };

}
let rectangleobj2 = createRectangle(5, 4);

rectangleobj2.color = 'yellow';   // dynamic nature of object 
console.log(rectangleobj2);

delete rectangleobj2.color;     // for deleting the function
console.log(rectangleobj2);






// constructor function -> pascal Notation -> first letter of ever is Capital -> NumberOfStudent

function Rectangle() {

    this.length = 9;
    this.bredth = 2;

    this.draw = function () {
        console.log('drawing');
    }

}

// object creation using constructor 
let rectangleObject = new Rectangle();

console.log(rectangleObject);
