class Sponsors {
    UserDashboard() {
        cy.get("#navbar").contains('Dashboard').click()
        cy.wait(2000)
        cy.url().should('include', '/backend');
        return this;
    }

    EventsList() {
        cy.get(".small-box-footer").click()
        cy.get("h3").contains('Events List')
        cy.wait(2000)
        cy.url().should('include', '/events');
        return this;
    }

    Go() {
        cy.get("tbody tr:nth-of-type(1) td:nth-of-type(8) .btnz-xs:nth-of-type(1)").click()
        return this;
    }

    partners() {
        cy.get(".col-md-12 > li:nth-of-type(4)").click()
        cy.wait(2000);
        cy.get(".btn.btn-blue.mr-0").click();
        return this;
    }

    EmptyFieldValidation() {
        cy.wait(2000);
        cy.get("[type='submit']").click();
        cy.get("#id_title-error").should("have.text","Company Name is required")
        cy.get("#id_partner_type-error").should("have.text","Partner/Sponsor type is required")
        return this;
    }
    
    AddSponsors() {
        cy.wait(2000);
        cy.get("#id_title").type("test")
        cy.get("span#select2-id_partner_type-container").click().wait(2000)
        cy.get("ul#select2-id_partner_type-results > li:nth-of-type(6)").click().wait(2000)
        cy.get('input#id_image').attachFile("esewa.jpg");
        cy.get('.btn.btn-primary.js-crop-and-upload').click();
        cy.get("[type='submit']").click({force:true});
        return this;
    }

    EditSponsors(){
        cy.wait(2000);
        cy.get("tr:last-child > td:nth-of-type(6) > .btn-wrap > .btnz.btnz-outline-default.btnz-xs").click()
        cy.get("#id_title").clear().type("Esewa")
        cy.get("[type='submit']").click({force:true});
        return this;
        
    }

    DeleteSponsors(){
        cy.wait(2000);
        cy.get("tr:last-child > td:nth-of-type(6) > .btn-wrap > .btnz.btnz-outline-danger.btnz-xs.partner_delete").click()
        cy.wait(2000);
        cy.get(".yes_button").click();
        return this;
    }
}
export default Sponsors;