// The Call Stack => JS Engine keeps Call Stack of the functions that are running when a function is invoked it is added to the list ,
// when all of the code in side of function has been run then the function  is removed from the call stack . 


function a() {

    console.log('hii');
}

function b() {
    console.log('hello');

    a();
}

a();
b();