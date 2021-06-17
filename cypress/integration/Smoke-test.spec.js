/// <reference types="cypress' / >

import '../fixtures/inkforall_url.json'
import { buttonClick, navbar, navigate, validation, downloadApp, footer, ShareIcons, domValidation, PricingBox, navbar1, domValidation1, label, describeTEXT, PressZip } from '../Page_Objects/ExportFunctions';
import { Keys } from '../Page_Objects/Key';
import '../Page_Objects/Local_Storage'

var a = 0;
var b;
//var x = "Home";
for (a = 0; a <= 31; a++) {
    if (a != 11 || a != 12 || a != 13 || a != 14 || a != 15 || a != 17 || a != 18 || a != 19 || a != 24 || a != 27 || a != 28 || a != 29 || a != 30) {

        describe('Smoke Test For Page : ' + (a + 1), () => {
            var b = a;
            //Before Hook will navigate to the testURL at index 'a' written in inkforall_url.json
            before(() => {
                navigate(b)
                if (b == 1 || b == 5 || b == 6 || b == 7 || b == 8 || b == 9 || b == 17 || b == 20 || b == 21 || b == 22 || b == 23 || b == 25) {
                    Cypress.on('window:load', (e) => {
                        if (e.location.host == 'auth-test.inkforall.com' || e.location.host == 'auth.inkforall.com') {
                            e.localStorage.setItem("recentLogins", Keys.recentLogins)
                        }
                    })
                    cy.reload()
                    buttonClick('.recent-login-button-container')
                }
            })

            //  Validating All testURLS
            it('Verify All Links', () => {
                validation(b)
                //  x=describeTEXT(b+1)
                // console.log(x+'after' )
            })

            if (a == 0 || a == 2 || a == 3 || a == 4 || a == 16 || a == 17 || a == 20 || a == 21 || a == 22 || a == 23 || a == 25 || a == 26) {
                //Verifying the All the Links in Header
                it('Verify Ink Icon in Header', () => {
                    if (b == 2) {
                        buttonClick('.link > img')
                    }
                    buttonClick('.nav-02__logo_img')  //Function is exported from ExportFuntions.js File 
                    validation(29)                   //Function is exported from ExportFuntions.js File 
                })
            }
            if (a == 0 || a == 3 | a == 16 || a == 20 || a == 21 || a == 22 || a == 23 || a == 25) {
                it('Verify Header Links', () => {
                    navbar(b)                         //Function is exported from ExportFuntions.js File 
                })
            }
            // if (a == 20 || a == 21 || a == 22 || a == 23 || a == 25) {
            //     it('Verify Header Links', () => {
            //         navbar1()                     //Function is exported from ExportFuntions.js File 
            //     })
            // }

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
                    footer(b)     //Function is exported from ExportFuntions.js File 
                })

                //Verfiying the Share Icons in footer
                it('Verify ShareIcons Links', () => {
                    ShareIcons()  //Function is exported from ExportFuntions.js File 
                })
            }
            // if (a == 1 || a == 7) {
            //     //Verfiying the Share Icons in footer
            //     it('Verify Download on Windows', () => {
            //         buttonClick(':nth-child(1) > .downloadCardFooter > .MuiButtonBase-root > .MuiButton-label')
            //          cy.request({
            //             method: 'GET',
            //             url: 'https://api-test.ink.seo.app/core/api/v2.0/downloads/generate-link?platform=windows&?ink_visit_id=60c93f6b0db96065a04e8269&session_id=mpFfbD77',
            //              body: {
            //             authorization : Keys.authorization
            //             },
            //           }).then(
            //             (response) => {
            //                 console.log(response);
            //               expect(response.body).to.have.property('authorization', Keys.authorization)
            //             }
            //           )

            //      cy.get('#arrow-chrome > img', { timeout: 700000 }).should('be.visible')
            //     })

            // it('Verify Download on MAC', () => {
            //     buttonClick(':nth-child(2) > .downloadCardFooter > .MuiButtonBase-root')
            //     cy.get('#arrow-chrome > img', { timeout: 700000 }).should('be.visible')
            // })

            // it('Verify Download on Linux', () => {
            //     buttonClick(':nth-child(3) > .downloadCardFooter > .MuiButtonBase-root')
            //     cy.get('#arrow-chrome > img', { timeout: 700000 }).should('be.visible')
            // })
            //class : MuiButtonBase-root MuiButton-root MuiButton-text jss10 jss11 undefined Mui-disabled jss16 Mui-disabled
            // }
            if (a == 3) {
                //Verfiying the Share Icons in footer
                it("Verify Join Us Live Button", () => {
                    navigate(3)
                    validation(3)
                    buttonClick('[style="text-align:center; margin-bottom: 30px;"] > button')
                    cy.get('#wj_registration_frame ', { timeout: 700000 }).should('be.visible')
                    cy.reload()
                })
            }
            if (a == 16) {
                //Verfiying the Share Icons in footer
                it("Verify DOWNLOAD INK It's Free", () => {
                    navigate(b)
                    buttonClick('#download_as > .button__text')
                    // buttonClick('.recent-login-button-container')
                    validation(1)
                })
            }
            if (a == 17 || a == 4) {
                it("Verify [GET INK PRO UNLIMITED, GET INK PRO, REQUEST CUSTOM PLAN] Buttons", () => {
                    PricingBox(b)
                })

                it('Verify Try Ink Now', () => {
                    navigate(a)
                    domValidation1(':nth-child(3) > .btn', 'https://ink.seo.app/downloads?')
                })
            }
            if (a == 20) {
                it('Verify All the Labels In Pricing Page', () => {
                    label()
                })
            }
            if (a == 25) {
                it('Verify All Dowload options', () => {
                    PressZip()
                    //test by Umer
                })
            }
        })
    }
}