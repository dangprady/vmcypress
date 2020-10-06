
export default class personalInfo {
    landingValidator = "//h3[contains(text(), 'get to know each other')]"
    emailadr = "input[type='email']"
    fname = "input[id='firstName']"
    lname = "input[id='lastName']"
    title = "select[id='title']"
    mobile = "input[id='mobile']"
    dob_month = "select[id='month']"
    dob_day = "select[id='day']"
    dob_year = "select[id='year']"
    next = "button[type='submit'][value='NEXT']"

    confirmClaimFormLoaded(){
        cy.xpath(this.landingValidator).should('be.visible')
    }
    enterEmail(email){
        cy.get(this.emailadr).type(email)
    }

    enterName(name){
        cy.get(this.fname).type(name)
    }

    enterLname(surname){
        cy.get(this.lname).type(surname)
    }

    enterMobile(mobNum){
        cy.get(this.mobile).type(mobNum)
    }

    selectTitle(ctitle){
        //Functionality to be added
        cy.get(this.title).select(ctitle)
    }

    enterDob(date){
        //Functionality to be added
        var res = date.split(" ")
        cy.get(this.dob_month).select(res[1])
        cy.get(this.dob_day).select(res[0])
        cy.get(this.dob_year).select(res[2])
    }

    pressNext(){
        cy.get("button.btn.btn-primary").click({force: true})
        //cy.get(this.next).click({multiple: true, force: true})
    }


}