// relation between parent and child

const parent = document.querySelector(".parent")
console.log(parent);
console.log(parent.children);
console.log(parent.children[1].innerHTML);       // to show tuesday on screen

parent.children[2].style.color = "orange";            // now wednesday is orange



// add new element
function addDay(day) {

    const div = document.createElement('div');
    div.appendChild(document.createTextNode(day));
    document.querySelector('.parent').appendChild(div)
}

addDay("sunday")