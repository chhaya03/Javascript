// scopes -->  lifetime of statement



{
    let a = 5;
    console.log(a);     //using let keyword lifetime of this code is only inside curly braces of nearest block of code if we print this statement outside of braces then output will undefined
}


{
    var b = 7;
    //using var keyword lifetime of this code is anywhere in entire file if we print this statement outside of braces then output will valid
}

console.log(b);







// Example using loop

for (let i = 0; i < 10; i++) {

}
// console.log(i);                     // we can't print this statement outside of loop beacaus is used let keyword



for (var j = 0; j < 10; j++) {
    console.log(j);
}
// console.log(j);                     // we can print this statement outside of loop beacaus is used var keyword
