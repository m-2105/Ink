/// <reference types="cypress' / >
import '../fixtures/inkforall_url.json'
export function navigateURl(url){
    cy.visit(url)
}

export function navigate(n){
  cy.fixture('inkforall_url').then(function (data) {
  this.data = data;
  navigateURl(this.data[n].testurl)
})
}

export function validation(n){
  cy.fixture('inkforall_url').then(function (data) {
  this.data = data;
  cy.url().should('contain',this.data[n].testurl)
  })
}
export function navbar(){
 for(var i=1; i<=6; i++ ){
  buttonClick('.nav-02__list--desktop > :nth-child('+ i +') > .button')
  validation(i)
 navigate(0)
 validation(0)
}
}

 export function downloadApp(Path,here){
  cy.fixture('inkforall_url').then(function (data) {
    this.data = data;
  for(var i=1; i<=3; i++ ){
   cy.get(Path + i +') > .button').should("have.attr", "href", this.data[i+7].testurl);
  }
  cy.get(here).should("have.attr", "href", this.data[30].testurl);
})
}

 export function buttonClick(path){
    cy.get(path,{timeout: 700000}).should('be.visible');
    cy.get(path).click()
     // { multiple: true } 
   }

   export function footer(){

    buttonClick('.footer-04__logo')  
    validation(28) 

    for(var i=2; i<=4; i++){
      if (i==2 || i==4){
        for(var j=1; j<=2; j++){
         buttonClick(':nth-child('+i+') > .footer-04__list > :nth-child('+j+') > .footer-04__link')

         if(i==2)
         validation(j+15)
         if(i==4)
         validation(j+21)

         navigate(0)
         validation(0)
        }
      }
      else{
       for(var j=1; j<=4; j++){
        buttonClick(':nth-child('+i+') > .footer-04__list > :nth-child('+j+') > .footer-04__link')

        if(i==3) if(i==4){
          if(j == 1 || j == 2){
           cy.get(':nth-child('+i+') > .footer-04__list > :nth-child('+j+') > .footer-04__link').should("have.attr", "href", this.data[j+17].testurl);
          }
          else
          validation(j+17)
         }
         
         if(i==5){
          if(j == 1 || j == 4){
           cy.get(':nth-child('+i+') > .footer-04__list > :nth-child('+j+') > .footer-04__link').should("have.attr", "href", this.data[j+23].testurl);
          }
          else
          validation(j+23)
         }
         
 
         navigate(0)
         validation(0)

        }
      }
      }

      //
    }
