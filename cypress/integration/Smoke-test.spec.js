/// <reference types="cypress' / >
import '../fixtures/inkforall_url.json'
import { buttonClick, navbar, navigate, validation, downloadApp, footer, ShareIcons, NavigateForlocalStorage } from '../Page_Objects/ExportFunctions';
import '../Page_Objects/Local_Storage'

before(() => {
//NavigateForlocalStorage();
navigate(0)
//cy.viewport('iphone-6')
})

describe('Smoke Test For InkForALl', () => {
    
    //Validating the Testing.inkforAll Link
    it('Verify All Links', () => {
        validation(0)
    })
    
    //Verifying the All the Links in Header
    it('Verify Header Links', () => {
        //cy.restoreLocalStorage()
        buttonClick('.nav-02__logo_img')  //Function is exported from ExportFuntions.js File 
        validation(29)                    //Function is exported from ExportFuntions.js File 
        navbar()                         //Function is exported from ExportFuntions.js File 
    })

    //Verifying the Ink Free Forever
    it('Verify Use Ink Free Forever Link', () => {
        buttonClick('.header-23__cta_box > .buttons-set > .buttons-set__list > .buttons-set__item > .button > .button__text')  //Function is exported from ExportFuntions.js File 
        validation(7)//Function is exported from ExportFuntions.js File 
        cy.go('back')
    })
    
    //Verifying All the Download Apps Links
    it('Verify Download Apps Links', () => {
        downloadApp('.header-61__cta_box > .buttons-set > .buttons-set__list > :nth-child(', '.header-61__text > p > a')  //Function is exported from ExportFuntions.js File 
        downloadApp('[style="position: relative; z-index: 10;"] > .header-61 > .container > .header-61__left > .header-61__left_content > .header-61__left_content_box > .header-61__cta_box > .buttons-set > .buttons-set__list > :nth-child(', '#header-61-259941 > div:nth-child(2) > header > div.container.container--large.header-61__container > div > div > div > div.header-61__text.content_box > p > a') //Function is exported from ExportFuntions.js File 
    })

    //Verifying All the Links in Footer except Share Icons
    it('Verify Footer Links', () => {
        footer()     //Function is exported from ExportFuntions.js File 
    })
    //Verfiying the Share Icons in footer
    it('Verify ShareIcons Links', () => {
        ShareIcons()  //Function is exported from ExportFuntions.js File 
    })

})