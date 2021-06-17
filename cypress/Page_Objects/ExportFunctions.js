/// <reference types="cypress' / >
import '../fixtures/inkforall_url.json'
import '../fixtures/Href.json'
import './Local_Storage'
import { Keys } from './Key'

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
export function domValidation1(Path, Hint) {
  cy.get(Path).should("have.attr", "href").and('include', Hint);
}
//Function for Validating URl from fixture file With DOM VIEW
export function domValidation(Path, n) {
  cy.fixture('inkforall_url').then(function (data) {
    this.data = data;
    cy.get(Path).should("have.attr", "href").and('contain', this.data[n].testurl);
  })
}
// //Function for Validating all the NavBar items URL without keys
export function navbar1(n) {
  for (var i = 1; i <= 6; i++) {
    buttonClick('.nav-02__list--desktop > :nth-child(' + i + ') > .button')
   validation(i)
   navigate(n)
    validation(n)
  }
}
//Function for Validating all the NavBar items URL
export function navbar(n) {
  for (var i = 1; i <= 6; i++) {
    buttonClick('.nav-02__list--desktop > :nth-child(' + i + ') > .button')
    Cypress.on('window:load', (e) => {
      if (e.location.host == 'auth-test.inkforall.com') {
        e.localStorage.setItem("recentLogins", Keys.recentLogins)
      }
    })
    if (i == 1) {
      cy.reload()
      buttonClick('.recent-login-button-container')
    }
    validation(i)
    //  domValidation('#\\31 6010-230037 > nav > div > div > div.nav-02__links.js-menu > div.nav-02__list_wrapper > ul.nav-02__list.nav-02__list--desktop > li:nth-child('+i+') > a',i)
    navigate(n)
    validation(n)
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
export function footer(n) {
  for (var i = 2; i <= 4; i++) {
    if (i == 2 || i == 4) {
      for (var j = 1; j <= 2; j++) {
        buttonClick(':nth-child(' + i + ') > .footer-04__list > :nth-child(' + j + ') > .footer-04__link')

        if (i == 2)
          validation(j + 15)
        if (i == 4)
          validation(j + 21)

        navigate(n)
        validation(n)
      }
    }
    else {
      for (var j = 1; j <= 4; j++) {

        if (i == 3) {
          if (j == 1 || j == 2) {
            domValidation(':nth-child(' + i + ') > .footer-04__list > :nth-child(' + j + ') > .footer-04__link', j + 17)
          }
          else {
            buttonClick(':nth-child(' + i + ') > .footer-04__list > :nth-child(' + j + ') > .footer-04__link')
            validation(j + 17)
          }
          navigate(n)
          validation(n)
        }

        if (i == 5) {
          if (j == 1 || j == 4) {
            domValidation(':nth-child(' + i + ') > .footer-04__list > :nth-child(' + j + ') > .footer-04__link', j + 23)
          }
          else {
            buttonClick(':nth-child(' + i + ') > .footer-04__list > :nth-child(' + j + ') > .footer-04__link')
            validation(j + 23)
          }
          navigate(n)
          validation(n)
        }
      }
    }
  }
  cy.get('.footer-04__top_wrapper > :nth-child(1)').scrollTo('0%', '90%', { ensureScrollable: false })
  buttonClick('.footer-04__logo')
  validation(28)
  navigate(n)
  validation(n)
}

//Function for Validating Share Icons in footer
export function ShareIcons() {
  for (var i = 1; i <= 4; i++) {
    domValidation('div:nth-child(6) > div > div > ul > li:nth-child(' + i + ') > a', i + 10)
  }
}

export function describeTEXT(n) {
  cy.fixture('inkforall_url').then(function (data) {
    this.data = data;
    var x = this.data[n].buttonName
    return x;
  })

}
export function PricingBox(b) {
  console.log(b)
  for (var i = 1; i <= 3; i++) {
    domValidation1('#has-data > div:nth-child(' + i + ') > div > a', 'auth-test.inkforall.com')
  }
}
export function PressZip(b) {
  cy.fixture('Href').then(function (data, x) {
    this.data = data;
    for (var i = 0; i <= 7; i++) {
      domValidation1(this.data[i + 18].path, this.data[i + 18].linkAddress)
    }
    domValidation1(this.data[25].path, this.data[25].linkAddress)
  })
}
export function label() {
  cy.fixture('Href').then(function (data, x) {
    this.data = data;
    for (var i = 0; i <= 17; i++) {
      domValidation1(this.data[i].path, this.data[i].linkAddress)
    }
  })
}

