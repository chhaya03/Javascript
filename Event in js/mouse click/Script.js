// Event Object => It is a special object that has details about the event . 
// All event handlers have access to the  event object's properties and methods.
// node.event=(e) => {// handle here}




// button 1

let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {                         // onclick=> for only single click
    console.log("button was clicked");
}

// btn1.onclick = (e) => {
//     console.log(e);             // for event object                    
// }



// for button 2
let btn2 = document.querySelector("#btn2");                   // ondblclick=> for double click

btn2.ondblclick = () => {
    console.log("button was clicked 2x");
}


// for div
let div = document.querySelector("div");

div.onmouseover = () => {                                 // mouse hovered
    console.log("Arrow is inside the box");
}


