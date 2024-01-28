//using Callback function (find method)

// Searchings on references

let courses = [
    { No: 1, Name: 'Chhaya' },
    { No: 2, Name: 'Jenny' }
];

console.log(courses);
console.log(courses.indexOf({ No: 1, Name: 'Chhaya' }));   // output will be -1 not 0 because both method is different so we cant find index of object like this

// by indixing method we cant search in reference so using callback function we can search in reference (by find function)

let courses2 = courses.find(function (courses2) {
    return courses2.Name == 'Jenny';
}
)

// let courses2 = courses.find(courses2 => courses2.Name === 'Jenny');     short form code of exact above of code

console.log(courses2);


