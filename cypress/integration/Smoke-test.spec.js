/// <reference types="cypress' / >

import '../fixtures/inkforall_url.json'
import { buttonClick, navbar, navigate, validation, downloadApp, footer, ShareIcons, domValidation, PricingBox, navbar1 } from '../Page_Objects/ExportFunctions';
import { Keys } from '../Page_Objects/Key';
import '../Page_Objects/Local_Storage'

var a = 0;
var i;
for (a = 16; a <= 30; a++) {

    if (a != 11 || a != 12 || a != 13 || a != 14 || a != 15) {
        describe('Smoke Test For InkForAll: ' + (a), () => {
            var i = a;
            //Before Hook will navigate to the testURL at index 'a' written in inkforall_url.json
            before(() => {
                navigate(i)
                if (i == 1 || i == 5 || i == 6 || i == 7 || i == 8 || i == 9 || i == 17 || i == 20 || i == 21 || i == 22 || i == 23 || i == 25) {
                    Cypress.on('window:load', (e) => {
                        if (e.location.host === 'auth-test.inkforall.com' || e.location.host === 'auth.inkforall.com') {
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

            if (a == 0 || a == 2 || a == 3 || a == 4 || a == 16 || a == 17 || a == 20 || a == 21 || a == 22 || a == 23 || a == 25 || a == 26) {
                //Verifying the All the Links in Header
                it('Verify Ink Icon in Header', () => {
                    if (i == 2) {
                        buttonClick('.link > img')
                    }
                    buttonClick('.nav-02__logo_img')  //Function is exported from ExportFuntions.js File 
                    validation(29)                   //Function is exported from ExportFuntions.js File 
                })
            }
            if (a == 0) {
                it('Verify Header Links', () => {
                    navbar()                         //Function is exported from ExportFuntions.js File 
                })
            }
            if (a == 3 || a == 16 || a == 20 || a == 21 || a == 22 || a == 23 || a == 25) {
                it('Verify Header Links', () => {
                    navbar1()                     //Function is exported from ExportFuntions.js File 
                })
            }

            if (a == 0) {
                //Verifying the Ink Free Forever
                it('Verify Use Ink Free Forever Link', () => {
                    buttonClick('.header-23__cta_box > .buttons-set > .buttons-set__list > .buttons-set__item > .button > .button__text')  //Function is exported from ExportFuntions.js File 
                    validation(7)//Function is exported from ExportFuntions.js File 
                    navigate(0)
                })
            }

            if (a == 0) {
                //Verifying All the Download Apps Links
                it('Verify 1st Download Apps Links', () => {
                    downloadApp('.header-61__cta_box > .buttons-set > .buttons-set__list > :nth-child(', '.header-61__text > p > a')  //Function is exported from ExportFuntions.js File 
                })
            }

            if (a == 0 || a == 20 || a == 21 || a == 22 || a == 23 || a == 25) {
                //Verifying All the Download Apps Links
                it('Verify 2nd Download Apps Links', () => {
                    downloadApp('[style="position: relative; z-index: 10;"] > .header-61 > .container > .header-61__left > .header-61__left_content > .header-61__left_content_box > .header-61__cta_box > .buttons-set > .buttons-set__list > :nth-child(', '#header-61-259941 > div:nth-child(2) > header > div.container.container--large.header-61__container > div > div > div > div.header-61__text.content_box > p > a') //Function is exported from ExportFuntions.js File 
                })
            }

            if (a == 0 || a == 2 || a == 3 || a == 4 || a == 17 || a == 20 || a == 21 || a == 22 || a == 23 || a == 25 || a == 26) {
                //Verifying All the Links in Footer except Share Icons
                it('Verify Footer Links', () => {
                    footer()     //Function is exported from ExportFuntions.js File 
                })

                //Verfiying the Share Icons in footer
                it('Verify ShareIcons Links', () => {
                    ShareIcons()  //Function is exported from ExportFuntions.js File 
                })
            }
            if (a == 1 || a == 7) {
                //Verfiying the Share Icons in footer
                it('Verify Download on Windows', () => {
                    buttonClick(':nth-child(1) > .downloadCardFooter > .MuiButtonBase-root')
                    // cy.get('#arrow-chrome > img', { timeout: 700000 }).should('be.visible')
                })

                it('Verify Download on MAC', () => {
                    buttonClick(':nth-child(2) > .downloadCardFooter > .MuiButtonBase-root')
                    // cy.get('#arrow-chrome > img', { timeout: 700000 }).should('be.visible')
                })

                it('Verify Download on Linux', () => {
                    buttonClick(':nth-child(3) > .downloadCardFooter > .MuiButtonBase-root')
                    // cy.get('#arrow-chrome > img', { timeout: 700000 }).should('be.visible')
                })
                //class : MuiButtonBase-root MuiButton-root MuiButton-text jss10 jss11 undefined Mui-disabled jss16 Mui-disabled
            }
            if (a == 16) {
                //Verfiying the Share Icons in footer
                it("Verify DOWNLOAD INK It's Free", () => {
                    buttonClick('#download_as > .button__text')
                    // buttonClick('.recent-login-button-container')
                    validation(1)
                })
            }
            if (a == 17) {
                //Not Working
                // it("Verify DOWNLOAD INK It's Free", () => {
                //   PricingBox()
                // })
                it('Verify Try Ink Now', () => {
                    buttonClick(':nth-child(3) > .btn')
                    validation(0)
                })
            }
            // if (a == 20) {
            //     //Verfiying the Share Icons in footer
            //     it('Verify Download on Windows', () => {
            //         buttonClick('.content_box > div > :nth-child(1) > a')
            //         validation()
            //     })
            //     //Verfiying the Share Icons in footer
            //     it('Verify legal@inkco.co', () => {
            //         buttonClick('div > :nth-child(3) > a')
            //         validation()
            //     })
            //     //Verfiying the Share Icons in footer
            //     it('Verify here label', () => {
            //         buttonClick(':nth-child(17) > a')
            //     })

            // }
        })
    }

}