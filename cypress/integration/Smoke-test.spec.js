/// <reference types="cypress' / >

import '../fixtures/inkforall_url.json'
import { buttonClick, navbar, navigate, validation, downloadApp, footer, ShareIcons, PricingBox,  domValidation1, label, PressZip, InkFree } from '../Page_Objects/ExportFunctions';
import '../Page_Objects/Local_Storage'
var a = 0;
var b;
var pageName = ["Home", "Ink Editor", "AI Writing Tools", "Resources", "Pricing", "Login", "Signup", "USE INK FREE FOREVER", "Windows",
    "Mac", "Linux", "Twitter", "Product Hunt", "Facebook", "Instagram", "Linked in", "How Ink Works", "Pricing", "Help Center",
    "Status Page", "Privacy Policy", "Terms of services", "About", "Our History", "Blog", "Press", "Free Tools", "Developer API",
    "Footer-ink_", "Header-ink_", "here"
]

for (a = 0; a <= 0; a++) {
    if (a == 0 || a == 2 || a == 3 || a == 4 || a == 16 || a == 20 /*|| a == 21 */|| a == 22 || a == 23 || a == 25) {
        describe('Smoke Test For ' + pageName[a] + ' Page --[index: ' + a + ']', () => {
            var b = a;
            //Before Hook will navigate to the testURL at index 'a' written in inkforall_url.json
            before(() => {
                navigate(b)
            })

            //  Validating Current Page URL
            it('Verify ' + pageName[b] + ' URL', () => {
                validation(b)                                      //Function is exported from ExportFuntions.js File
            })

            if (a == 0 || a == 2 || a == 3 || a == 4 || a == 16 || a == 17 || a == 21 || a == 22 || a == 23 || a == 25 || a == 26) {
                //Verifying the URL of Ink Icon in Header
                it('Verify URL of Ink Icon in Header', () => {
                    if (b == 2) {
                        buttonClick('.link > img')
                    }
                    buttonClick('.nav-02__logo_img')  //Function is exported from ExportFuntions.js File 
                    validation(29)                   //Function is exported from ExportFuntions.js File 
                })
            }
            if (a == 0 || a == 20 || a == 3 || a == 16 || a == 21 || a == 22 || a == 23 || a == 25) {
                //Verifying URls of Navbar Items
                it.only('Verify URls of Navbar Items', () => {
                    navbar(b)                         //Function is exported from ExportFuntions.js File 
                })
            }
            if (a == 0) {
                //Verifying the Ink Free Forever
                it('Verify URL of Use Ink Free Forever Button', () => {
                    InkFree('.header-23__cta_box > .buttons-set > .buttons-set__list > .buttons-set__item > .button > .button__text', b, 7)  //Function is exported from ExportFuntions.js File 
                })
            }
            if (a == 0) {
                //Verifying URLs of 1st Download Apps Buttons
                it('Verify URLs of 1st Download Apps Buttons', () => {
                    downloadApp('.header-61__cta_box > .buttons-set > .buttons-set__list > :nth-child(', '.header-61__text > p > a')  //Function is exported from ExportFuntions.js File 
                })
            }
            if (a == 0 || a == 20 || a == 21 || a == 22 || a == 23 || a == 25) {
                //Verifying URLs of 2nd Download Apps Buttons
                it('Verify URL of 2nd Download Apps Buttons', () => {
                    downloadApp('[style="position: relative; z-index: 10;"] > .header-61 > .container > .header-61__left > .header-61__left_content > .header-61__left_content_box > .header-61__cta_box > .buttons-set > .buttons-set__list > :nth-child(', '#header-61-259941 > div:nth-child(2) > header > div.container.container--large.header-61__container > div > div > div > div.header-61__text.content_box > p > a') //Function is exported from ExportFuntions.js File 
                })
            }
            if (a == 0 || a == 2 || a == 3 || a == 4 || a == 17 || a == 20 || a == 21 || a == 22 || a == 23 || a == 25 || a == 26) {
                //Verifying All the URLs of Footer Items except Share Icons
                it('Verify URLs of Footer Items', () => {
                    footer(b)     //Function is exported from ExportFuntions.js File 
                })

                //Verfiying the URLs of Share Icons in footer
                it('Verify URLs of ShareIcons in Footer', () => {
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
            //change in class:
            //class : MuiButtonBase-root MuiButton-root MuiButton-text jss10 jss11 undefined Mui-disabled jss16 Mui-disabled
            // }
            if (a == 16) {
                //Verfiying the URL of DOWNLOAD INK It's Free Button
                it("Verify URL of DOWNLOAD INK It's Free Button", () => {
                    InkFree('#download_as > .button__text', b, 1)    //Function is exported from ExportFuntions.js File 
                })
            }
            if (a == 17 || a == 4) {
                //Verifying the URL of [GET INK PRO UNLIMITED, GET INK PRO, REQUEST CUSTOM PLAN] Buttons
                it("Verify URL of [GET INK PRO UNLIMITED, GET INK PRO, REQUEST CUSTOM PLAN] Buttons", () => {
                    PricingBox(b)                 //Function is exported from ExportFuntions.js File 
                })
                //Verifying the  URL of Try Ink Now Button
                it('Verify URL of Try Ink Now Button', () => {
                    domValidation1(':nth-child(3) > .btn', 'https://ink.seo.app/downloads?') //Function is exported from ExportFuntions.js File
                })
            }
            if (a == 20) {
                //Verifying URL of All the Labels In Pricing Page
                it('Verify URL of All the Labels', () => {
                    label() //Function is exported from ExportFuntions.js File
                })
            }
            if (a == 25) {
                //Verifying URL of All Downoad Options In Press Page
                it('Verify All Dowload options', () => {
                    PressZip()   //Function is exported from ExportFuntions.js File
                })
            }
        })
    }

}
