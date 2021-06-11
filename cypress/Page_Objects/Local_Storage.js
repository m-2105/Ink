import '../fixtures/inkforall_url.json'
import './Key'

// // Retrieving data:
// let text = localStorage.getItem("user");
// let obj = JSON.parse(text);
// document.getElementById("demo").innerHTML = obj.name;


//Storing Data
Cypress.Commands.add("ByPassLogin", () => {
    Object.keys(Keys).forEach(key => {
        localStorage.setItem(key, Keys[key])
    })
    //for(var i=1; i<=4; i++)
    //window.localStorage.setItem(Cypress.env('Key'+i),Cypress.env('Value'+i))
})
