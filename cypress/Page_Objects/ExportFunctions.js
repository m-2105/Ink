/// <reference types="cypress' / >
import '../fixtures/inkforall_url.json'
import '../fixtures/ByPassLogin.json'
import '../Page_Objects/Local_Storage'

//Function for Saving Local Storage [Will be corrected by tomorrow]
//  export function ByPassLogin() {
//   const options = {
//     method: 'POST',
//       url: 'https://testing.inkforall.com',
  
//       body: {
//         idToken : Cypress.env('Value1'),
//         accessToken : Cypress.env('Value2'),
//         user : Cypress.env('Value3'),
//         refreshToken : Cypress.env('Value4')
//       }
//   }
//   cy.request(options)

//   })
//   // cy.fixture('ByPassLogin').then(function (data) {
//   //   this.data = data;
//   //  for(var i=0; i <= data.length; i++){
//   //   localStorage.setItem( this.data[i].Key ,this.data[i].Value)
//   //  }
//   //  }) 
//  }

//Function for Navigating URl
export function navigateURl(url) {
  cy.visit(url)
}

//Function for Navigating URl though fixture file 
export function navigate(n) {
  cy.fixture('inkforall_url').then(function (data) {
    this.data = data;
    navigateURl(this.data[n].testurl)
  })
}

//Function for Clicking a Button
export function buttonClick(path) {
  cy.get(path, { timeout: 700000 }).should('be.visible');
  cy.get(path).click()
}

//Function for Validating URl from fixture file 
export function validation(n) {
  cy.fixture('inkforall_url').then(function (data) {
    this.data = data;
    cy.url().should('contain', this.data[n].testurl)
  })
}

//Function for Validating URl from fixture file With DOM VIEW
export function domValidation(Path, n) {
  cy.fixture('inkforall_url').then(function (data) {
    this.data = data;
    cy.get(Path).should("have.attr", "href").and('contain',this.data[n].testurl);
  })
}

//Function for Validating all the NavBar items URL
export function navbar() {
  for (var i = 1; i <= 6; i++) {
   // buttonClick('.nav-02__list--desktop > :nth-child(' + i + ') > .button')
    domValidation('#\\31 6010-230037 > nav > div > div > div.nav-02__links.js-menu > div.nav-02__list_wrapper > ul.nav-02__list.nav-02__list--desktop > li:nth-child('+i+') > a',i)
    // navigate(0)
    // validation(0)
  }
}

//Function for Validating all the Download App Button URL
export function downloadApp(Path, here) {
  cy.fixture('inkforall_url').then(function (data) {
    this.data = data;
    for (var i = 1; i <= 3; i++) {
      domValidation(Path + i + ') > .button', i + 7)
    }
    domValidation(here, 30)
  })
}

//Function for Validating all the Items in footer Except Share Icons
export function footer() {

  for (var i = 2; i <= 4; i++) {
    if (i == 2 || i == 4) {
      for (var j = 1; j <= 2; j++) {
        buttonClick(':nth-child(' + i + ') > .footer-04__list > :nth-child(' + j + ') > .footer-04__link')

        if (i == 2)
          validation(j + 15)
        if (i == 4)
          validation(j + 21)

        navigate(0)
        validation(0)
      }
    }
    else {
      for (var j = 1; j <= 4; j++) {
        buttonClick(':nth-child(' + i + ') > .footer-04__list > :nth-child(' + j + ') > .footer-04__link')

        if (i == 3) if (i == 4) {
          if (j == 1 || j == 2) {
            domValidation(':nth-child(' + i + ') > .footer-04__list > :nth-child(' + j + ') > .footer-04__link', j + 17)
          }
          else
            validation(j + 17)
            navigate(0)
            validation(0)
        }

        if (i == 5) {
          if (j == 1 || j == 4) {
            domValidation(':nth-child(' + i + ') > .footer-04__list > :nth-child(' + j + ') > .footer-04__link', j + 23)
          }
          else
            validation(j + 23)
            navigate(0)
            validation(0)
        }
      }
    }
  }
  //cy.scrollTo('bottom')
  buttonClick('.footer-04__logo')
  validation(28)
}

//Function for Validating Share Icons in footer Except
export function ShareIcons() {

  for (var i = 1; i <= 4; i++) {
    //buttonClick('#\\31 6010-230037 > div.bg-black-color > footer > div > div.container > div > div:nth-child(6) > div > div > ul > li:nth-child(' + i + ') > a')
    domValidation('#\\31 6010-230037 > div.bg-black-color > footer > div > div.container > div > div:nth-child(6) > div > div > ul > li:nth-child(' + i + ') > a', i + 10)
    // navigate(0)
    // validation(0)
  }
}
