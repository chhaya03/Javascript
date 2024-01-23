// object cloning is copy of keys value from one objetc to another object
// cloning is done by three types: (i) iteration (ii) assign  (iii) Spreads


// object cloning by iteration  #1
let src = {
    a: 10,
    b: 20,
    c: 30
};
let dest = {};

for (let key in src) {
    dest[key] = src[key];
}
console.log(dest);







// object cloning by asssign #2
let src2 = {
    x: 10,
    y: 20,
    z: 30
};

let src3 = { value1: 52, value2: 50 };
let dest2 = Object.assign({}, src2, src3);   // can be copied multiple objects into one objetc by using assign cloning

console.log(dest2);






//object cloning by spreads  #3
let src4 = {
    i: 10,
    j: 20
};

let dest3 = { ...src4 };
console.log(dest3);