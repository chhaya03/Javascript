// Adding 100 para
for (let i = 1; i <= 100; i++) {
    let newElement = document.createElement("p");                // 100 p tags are created
    newElement.textContent = 'This is para' + i;                    // content are created inside p tag


    document.body.appendChild(newElement);                          // 100 p tags are appended(inserted)  in body tag
}