
// Getter and setter 
// Getter --> access properties
//setter --> change properties

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


// another values input using same funnction in which get and set
person.fulName = 'john doe';
console.log(person.fulName);


person.fulName = 'umang mishra';
console.log(person.fulName);