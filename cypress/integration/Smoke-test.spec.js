/// <reference types="cypress' / >

import '../fixtures/inkforall_url.json'
import { buttonClick, navbar, navigate, validation, downloadApp, footer, ShareIcons, domValidation } from '../Page_Objects/ExportFunctions';
import { Keys } from '../Page_Objects/Key';
import '../Page_Objects/Local_Storage'

var a = 0;
var i;
for (a = 0; a < 5; a++) {

    describe('Smoke Test For InkForAll: ' + (a), () => {
        var i = a;
        //Before Hook will navigate to the testURL at index 'a' written in inkforall_url.json
        before(() => {
            navigate(i)
            if (i == 1) {
                Cypress.on('window:load', (e) => {
                    if (e.location.host === 'auth-test.inkforall.com') {
                        e.localStorage.setItem("recentLogins", Keys.recentLogins)
                    }
                })
                cy.reload()
                buttonClick('.recent-login-button-container')
            }
        })

        //Validating All testURLS
        it('Verify All Links', () => {
            validation(i)
        })

        if (a == 0 || a== 3) {
            //Verifying the All the Links in Header
            it('Verify Header Links', () => {
                buttonClick('#\\31 6010-230037 > nav > div > div > div.nav-02__logo > a')  //Function is exported from ExportFuntions.js File 
                validation(29)                   //Function is exported from ExportFuntions.js File 
                navbar()                         //Function is exported from ExportFuntions.js File 
            })
        }

        if (a == 0) {
            //Verifying the Ink Free Forever
            it('Verify Use Ink Free Forever Link', () => {
                console.log('second it is running fine')
                // buttonClick('.header-23__cta_box > .buttons-set > .buttons-set__list > .buttons-set__item > .button > .button__text')  //Function is exported from ExportFuntions.js File 
                domValidation('#header-23-349661 > div:nth-child(2) > header > div > div.header-23__left > div > div.header-23__cta_box > div > ul > li > a', 7)//Function is exported from ExportFuntions.js File 
                navigate(0)
            })
        }

        if (a == 0) {
            //Verifying All the Download Apps Links
            it('Verify Download Apps Links', () => {
                downloadApp('.header-61__cta_box > .buttons-set > .buttons-set__list > :nth-child(', '.header-61__text > p > a')  //Function is exported from ExportFuntions.js File 
                downloadApp('[style="position: relative; z-index: 10;"] > .header-61 > .container > .header-61__left > .header-61__left_content > .header-61__left_content_box > .header-61__cta_box > .buttons-set > .buttons-set__list > :nth-child(', '#header-61-259941 > div:nth-child(2) > header > div.container.container--large.header-61__container > div > div > div > div.header-61__text.content_box > p > a') //Function is exported from ExportFuntions.js File 
            })
        }
        if (a == 0) {
            //Verifying All the Links in Footer except Share Icons
            it('Verify Footer Links', () => {
                footer()     //Function is exported from ExportFuntions.js File 
            })
        }

        if (a == 0) {
            //Verfiying the Share Icons in footer
            it('Verify ShareIcons Links', () => {
                ShareIcons()  //Function is exported from ExportFuntions.js File 
            })
        }

    })
}