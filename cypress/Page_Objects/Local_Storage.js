import '../fixtures/inkforall_url.json'
//"baseUrl": "http://localhost:8484",

Cypress.Commands.add("ByPassLogin", () => {
for(var i=1; i<=4; i++)
      window.localStorage.setItem(Cypress.env('Key'+i),Cypress.env('Value'+i))
  })
 
//   Cypress.Commands.add("restoreLocalStorage", () => {
//     Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
//       localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key])
//     })
//   })