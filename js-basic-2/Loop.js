
let rectangle = {
    length: 2,
    bredth: 4,
};


console.log('for-in loop:');
// for-in loop
for (let key in rectangle) {
    // keys are reflected through key variable
    // value are reflected through rectangle[key] variable
    console.log(key, rectangle[key]);
}


console.log('for-of loop:');
// for-of loop
for (let key of Object.keys(rectangle)) {
    console.log(key);
}




// for finding property in object
if ('color' in rectangle) {
    console.log('Present');
}

else {
    console.log('Absent');
}