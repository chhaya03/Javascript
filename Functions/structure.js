
// --> first way to createing function

// functions declaration
function run() {
    console.log('running');
}

// function call or invoke
run();




// --> second way to creating function

// function assignment
let stand = function walk() {
    console.log('walking');
}
// function call or invoke
stand();

// lets equate the function with another
let jump = stand;

jump();     // function call