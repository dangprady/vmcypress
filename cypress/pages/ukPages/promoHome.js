
export default class promoHome {

    claimNow = "a[href='/appliance/gb/en/claims-page']";
    startClaim = "a.btn.btn-primary.btn-lg"
    termsCheckBox = "input#terms.custom-control-input"


    xapplianceCashback = "//h5[contains(text(),'Appliance Cashback')]/following-sibling::*";


    pressClaimNow(){
        cy.get(this.claimNow).click({ multiple: true, force: true })
        
    }

    checkTerms(){
        cy.get(this.termsCheckBox).click({ force: true })
    }
    acceptTerms(){
        cy.get(this.startClaim).click()
    }

}