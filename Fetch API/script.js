// Fetch API => the fetch API provides an interface for fetching (Sending/receiving) resources.
// It uses Request and Responde objects.
// the fetch() method is used to fetch a resource (data).
// let promise= fetch(url,[options])
// JSON=> is javascript object Notation
// json()  method=> returns a second promise that resolve with the result of parsing the response body text as JSON.
// (input json , output js object)



const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");



let getFacts = async () => {
    console.log("Getting data.........");
    let response = await fetch(URL);
    console.log(response);      // JSON Formate

    let data = await response.json();
    factPara.innerText = data[2].text;
}

btn.addEventListener("click", getFacts);

