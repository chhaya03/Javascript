// node.addEventListener(event,callback)
// node.removeEventListener(event,callback)
// Note:- The callback reference should be same to remove


btn1.addEventListener("click", () => {
    console.log("Button1 was clicked-handler1");
});

btn1.addEventListener("click", () => {
    console.log("Button1 was clicked-handler2");
});

const handle3 = () => {
    console.log("Button1 was clicked-handler3");
};

btn1.addEventListener("click", handle3);


btn1.addEventListener("click", () => {
    console.log("Button1 was clicked-handler4");
});





// now i want to remove event 3 for btn 1

btn1.removeEventListener("click", handle3);