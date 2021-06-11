/// <reference types="cypress' / >
import '../fixtures/inkforall_url.json'
import { buttonClick, navbar, navigate, validation, downloadApp, footer, ShareIcons, ByPassLogin, domValidation } from '../Page_Objects/ExportFunctions';
import '../Page_Objects/Local_Storage'

import { Keys, V4 } from '../Page_Objects/Key'

before(() => {
    navigate(0)
})

// beforeEach(() => {
// cy.ByPassLogin()
// cy.url()
// cy.location('href')
//cy.viewport('iphone-6')
//})
// Cypress.on('window:load', (e) => {
//     // returning false here prevents Cypress from
//     // failing the test
//     console.log('----')
//     console.log('WINDOW LOAD', e);
//     console.log(e.location.host)
//     if (e.location.host === 'auth-test.inkforall.com') {
//         console.log(e.localStorage);
//         // console.log(e.window());
//         e.localStorage.setItem('recentLogins', JSON.stringify([{"refresh_token":"eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.MuaMI4hbQUFGmh1bXucz_G5foGtU0DMnEwR8tOcc9ZOSHi9NmwgKmrD0-7Mx8vpTH5ovtZY4XWhDQAdR4pS7SssgPxK0LZ6vPJ_jDaCkFgCoYP1N1U6qDwdxYYdi7wLKQT46a8X83owlnr2zMB69cvsA3WrRlirEjyteudcjWIVi2t_d_8IqcmpXW-j9K7Rjthb8VyiUaBeMDaleCNG63SKz1z4HN0uJvH_zBQUj8pTMMhcD7k1E_kPYs_eQZm08hi-THfJ8ldEt5Mib5mC49rHYLWYJNo_c4IXorFfXquP2Kab7_eGfpg8LPAMei61swCGGJvapSp3DiLrfb6LUVA.N3BlMTpTke7k60pa.HBmRN0bZh_wuPON4F4cmoCdK4V2t3Xy0JMpQ9-LxnZCgNg2x2Wmc7fwq1vI7OAz6edq3mfbGUc6fN4WxjmPVFlKPGGf31TqGrmKW1A1Y9uVHLxGI0y-x1iAIWnOaY7vtednbGwmlzbFUz7ncmDSiM2-VQpyfKXfOhZ4bpj4dbacp1lTkkoQUjq5GCN0dsCMmetcFu8ya8Go_u2f15r10AML_xhxSUMzUMEPfOGzWnwWMJbK-GC7_-M-CnZNFIA81DkW_NIer5AVSx4cC8X0YVFypFe0H-rsUelGGKRAL3E5cxUKQBAIOy3iHyTdTOJ5kem74BQN7xkmyPaMiFa-URgT-dnnUjTuKMEvPAXfwzm0TQKK8BapVvY4nIpVbXSNfo4XydeekBd0oK0jQv0eQfsmJ-jr9nHq_rhYhhBR2nUMOKQvpqRYhhdt2R2LoU8IZkC4zaSegt6bJDuDpsz_1oBJoqmJJXf1m27hj8MVZoqnkuWlcSTDI5vYk34hUcju_vRbvNZ20akDubfOOX-O5gPo0BsQpff3QBzTcT4oL8TFTJOzs4JhiJ2Uf0i4WQG4y2Kuey4cS55Cn_Pk011kOcq1VmMAX5i_Kl3rAIpReSu4c7y7h_LTBrKPNkZpTPWf2X-45AnoCfL72DTW7nWn6zta0DcrPjNfhdBe-LmZ0kTQ0aNUl_oHb3tVUi1GL3K7i4jKLi9TuyH4hghawtBocy5ceJa5OM7Cf7Pr3Y3hFNNF1yPUK2MIi_lOe8xG3wmSUpLblRB3is8lAuNaZ3MaUuvTnmH7W-epAt1WZeKQs75at3lGTILwzOroOO7q4pLc1552dcc45QLTgH3ujZx72QQna1djBjcK8y8oDMBOdGd95Av66IsBPJOWyYfAbHagkwPERjPVpiooIt74OLyOdEg6jaYh2-eF04J8vbYrEcJndIjxWd3x4UzhSopXxqaHYqcAKBd89zfnta4ESbzDec6dfO-NNmc3iXvLwD4UCNUIWi8z2E-3ArQrv0qIK5MlY_aZFGHjUpfuJW-15nnb_Bk1xv7uzFQVus5IxdoPIW5RON5Lt0CfDkQnLVWuL1shRVSieIIjwpKF0DYp29yzTUmIrtjtAf5FCoX2UscOS3bz2fOYD-_OiInNBIhUOKbJL-5Bj8vSc70qQ44bASQuiSva_YZ-pfYEavhYwOmnLW07MHU4WEC_rB5a5Wk51qisLrwMipzjUWyK0T0eO3rdI9F3R80X24qQ9j0Rw-o6QEaXq1q7dMSAC7c_xonYEoKLAhn2dbEAfnQP79kRHjHVfCEfXlPog.6gSos4Z-pIsSk87vhBGGmQ","code":"ink_e9ebbf41-4d7d-4f29-922a-d3b8a20456ea","userName":"Edgy Test","expiresAt":1626002170000,"email":"edgytest01@gmail.com","picture":"https://lh3.googleusercontent.com/a/AATXAJyd08LdSXFvXPJZ4QXnQ6So1_rML7CrYnILy58T=s96-c","id":"Google_100223167038611105372","platform":"Google"}]))
//     }
//   })

describe('Smoke Test For InkForALl', () => {
    
    //Validating the Testing.inkforAll Link
    it('Verify All Links', () => {
         validation(0)
        // console.log(Keys.Key1+' '+ V4)
         })
    
    //Verifying the All the Links in Header
    it.only('Verify Header Links', () => {
        buttonClick('#\\31 6010-230037 > nav > div > div > div.nav-02__logo > a')  //Function is exported from ExportFuntions.js File 
        validation(29)                   //Function is exported from ExportFuntions.js File 
        // cy.window().then(win => {
        //     console.log(win);
        //     win.addEventListener('load', () => {
        //         console.log('aaa')
        //         console.log(win.location);
        //     })
        //     win.addEventListener('beforeunload', () => {
        //         console.log('aaa')
        //         console.log(win.location);
        //     })
        //     win.addEventListener('hashchange', () => {
        //         console.log('aaa')
        //         console.log(win.location);
        //     })
        // })
        navbar()                         //Function is exported from ExportFuntions.js File 
    })

    //Verifying the Ink Free Forever
    // it('Verify Use Ink Free Forever Link', () => {
    //    // buttonClick('.header-23__cta_box > .buttons-set > .buttons-set__list > .buttons-set__item > .button > .button__text')  //Function is exported from ExportFuntions.js File 
    //     domValidation('#header-23-349661 > div:nth-child(2) > header > div > div.header-23__left > div > div.header-23__cta_box > div > ul > li > a',7)//Function is exported from ExportFuntions.js File 
    //     cy.go('back')
    // })
    
    // //Verifying All the Download Apps Links
    // it('Verify Download Apps Links', () => {
    //     downloadApp('.header-61__cta_box > .buttons-set > .buttons-set__list > :nth-child(', '.header-61__text > p > a')  //Function is exported from ExportFuntions.js File 
    //     downloadApp('[style="position: relative; z-index: 10;"] > .header-61 > .container > .header-61__left > .header-61__left_content > .header-61__left_content_box > .header-61__cta_box > .buttons-set > .buttons-set__list > :nth-child(', '#header-61-259941 > div:nth-child(2) > header > div.container.container--large.header-61__container > div > div > div > div.header-61__text.content_box > p > a') //Function is exported from ExportFuntions.js File 
    // })

    // //Verifying All the Links in Footer except Share Icons
    // it('Verify Footer Links', () => {
    //     footer()     //Function is exported from ExportFuntions.js File 
    // })
    // //Verfiying the Share Icons in footer
    // it('Verify ShareIcons Links', () => {
    //     ShareIcons()  //Function is exported from ExportFuntions.js File 
    // })

})