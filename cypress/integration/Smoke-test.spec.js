/// <reference types="cypress' / >
import '../fixtures/inkforall_url.json'
import { buttonClick, navbar, navigate, validation, downloadApp, footer } from '../Page_Objects/ExportFunctions';
import '../Page_Objects/Session';

before(()=>{
    navigate(0)
    cy.viewport('iphone-6')
})

describe('Smoke Test For InkForALl',()=>{
    it('Verify All Links',() => { 
        validation(0)
    })
    it('Verify Header Links',() => { 
        buttonClick('.nav-02__logo_img')
        validation(29)
        navbar()
    })
    it('Verify Download Apps Links',() => { 

        buttonClick('.header-23__cta_box > .buttons-set > .buttons-set__list > .buttons-set__item > .button > .button__text')
        validation(7)
        cy.go('back')
        downloadApp('.header-61__cta_box > .buttons-set > .buttons-set__list > :nth-child(','.header-61__text > p > a')
        downloadApp('[style="position: relative; z-index: 10;"] > .header-61 > .container > .header-61__left > .header-61__left_content > .header-61__left_content_box > .header-61__cta_box > .buttons-set > .buttons-set__list > :nth-child(','#header-61-259941 > div:nth-child(2) > header > div.container.container--large.header-61__container > div > div > div > div.header-61__text.content_box > p > a')

    })
    it('Verify Footer Links',() => { 
     footer()
    })
    
    })