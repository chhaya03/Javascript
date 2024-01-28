//array is data structure used to contain a list of items .

let names = ['chhaya', 'sakshi', 'umang'];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
// 0 based indexing




// There are many methods in array




// <-- 1) Insertion

let num = [1, 5, 3, 8];

// end --> push method
console.log(num.push(9));
console.log(num)

// begining --> unshift method
console.log(num.unshift(20));
console.log(num)

// middle --> splice method
console.log(num.splice(1, 5, 'a', 'g', 'd'));
console.log(num)






// <-- 2) Searching
let numbers = [1, 4, 5, 7];
console.log(numbers);

console.log(numbers.indexOf(9));

// we want to check if a number exist in an array
if (numbers.indexOf(4) != -1)
    console.log("Present");


console.log(numbers.includes(7));
console.log(numbers.includes(20));

console.log(numbers.indexOf(4, 2));






// <-- 3) Removing
let num2 = [1, 2, 3, 4, 5, 6, 7];

num2.pop();            // remove end element
num2.shift();          // remove first element
num2.splice(2, 1)      //remove any element (where 2 is index of 4 and 1 symbolized for only one 1 element)
console.log(num2);







// <--4)  Emptying an array
let num3 = [1, 2, 3, 4, 5];
num3 = [];
console.log(num3);

// console.log(num3.splice(0, 6))       this is another method to emptying and array





// <--5 combining and slicing an array

// two array are required for combining

let first = [1, 2, 3];
let second = [4, 5, 6];

//let combined = first.concat(second);                // combining with concat method
let combined = [...first, ...second];                 // combining with spread operator (...)
console.log("combined array is:", combined);

// slicing
let marks = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let sliced = marks.slice(1, 4);               // .slice(start index,end index)  but end index will be excluded from outcome
console.log("sliced array is:", sliced);








// <-- 6) joining an array

let n = [10, 20, 30, 40, 50];
let joined = n.join(",");

console.log("joined array=", joined);






// <--7)  sorting arrays
let arr = [5, 8, 9, 3, 40];

arr.sort();
console.log("sorted array=", arr);       // ascending order

arr.reverse();
console.log("reversed array=", arr);        // descending order






// <--8)  Filtering arrays
let arr2 = [1, 2, -1, -2];

let filtered = arr2.filter(function (value) {
    return value >= 0;
});
console.log("filtered value:", filtered);








// <--9 mapping arrays
// maps each element of array to something else

let arr3 = [7, 8, 9, 10]

let items = arr3.map(function (value) {
    return 'student_no' + value;
});
console.log(items);


