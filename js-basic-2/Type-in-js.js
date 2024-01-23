// premitive or value type 

let a = 10;
let b = a;

b++;
console.log(a);   // a=11
console.log(b);   // b=10
// in premitive, values will be different because create copy of each variable so in different copy value stores own place, 
// there will be different adress due to different copy






// reference type

let x = { value: 4 };
let y = x;

x.value++;
console.log(x.value);  // x=5
console.log(y.value);  // y=5
// in reference, values will be same because  does not create copy so there will be same address 







// another example  (passed by value)
let i = 13;

function inc(i) {
    i++;
}

inc(i);
console.log(i);  // iteration did not  apply so value is 13 let i and inc(i) is different becoz create copy so address will be different










// anothor example ( passed by reference)

let j = { value: 20 };
inc(j);

function inc(j) {

    j.value++;
}

console.log(j);   // iteration applied succesfully so value is 21 letj and inc(j) is same becoz does not  create copy so address will be same
