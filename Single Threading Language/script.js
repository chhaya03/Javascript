
// Single threading language => can run  only one command at a time.
// line by line execution top to bottom
// js does not execute multiple lines/functions at the same time 


function addPara() {

    let para = document.createElement('p');
    para.textContent = 'js is single';

    document.body.appendChild(para);

}


function appendNewMessage() {
    let para = document.createElement('p');

    para.textContent = 'Kya hal chal';
    document.body.appendChild(para);
}

addPara();
appendNewMessage();