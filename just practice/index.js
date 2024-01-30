const y = 5;
const z = 6;
console.log(`the sum of z and y is ${z + y}.`);  //the sum of z and y is 11.



let x = 0;
for (let i = 0; i < 5; i++) {
    x += i;
}
console.log(x);    // 10 



const a = [1, 2, 3];
console.log(x[3]);             //undefined


const b = 5;
const c = "5";
console.log(b === c);     // false
console.log(Number(c));   //5