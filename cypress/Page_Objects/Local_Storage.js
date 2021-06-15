import '../fixtures/inkforall_url.json'
import './Key'

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
    console.log(key)
  });
});

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

//Storing Data
Cypress.Commands.add("ByPassLogin", () => {
    Object.keys(Keys).forEach(key => {
        localStorage.setItem(key, Keys[key])
    })
})
