class Speaker {
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

    SpeakerGuest() {
        cy.get(".col-md-12 > li:nth-of-type(3)").click()
        cy.wait(2000);
        cy.get(".btn.btn-blue.mr-0").click();
        return this;
    }

    EmptyFieldValidation() {
        cy.wait(2000);
        cy.get("[type='submit']").click();
        cy.get("#id_schedule-error").should("have.text","Schedule is required")
        cy.get("#id_name-error").should("have.text","Full name is required")
        cy.get("#id_speaker_type-error").should("have.text","Speaker Type is required")
        cy.get("#id_country-error").should("have.text","Country is required")
        return this;
    }
    
    AddSpeaker() {
        cy.wait(2000);
        cy.get(".select2-search__field").click().wait(2000)
        cy.get("ul#select2-id_schedule-results > li:nth-of-type(1)").dblclick().wait(2000)
        cy.get("#id_name").type("Gaynendra")
        cy.get("span[role='combobox'] > span[role='presentation']").click().wait(2000)
        cy.get("ul#select2-id_speaker_type-results > li:nth-of-type(1)").click()
        cy.get("#id_country").select("Nepal")
        cy.get('input#id_image').attachFile("shah.jpg");
        cy.get('.btn.btn-primary.js-crop-and-upload').click();
        cy.get("[type='submit']").click({force:true});
        return this;
    }

    EditSpeaker(){
        cy.get("tr:last-child > td:nth-of-type(6) > .btn-wrap > .btnz.btnz-outline-default.btnz-xs").click()
        cy.get("#id_name").clear().type("Gaynendra Shah")
        cy.get("[type='submit']").click({force:true});
        return this;
    }

    DeleteSpeaker() {
        cy.wait(2000)
        cy.get("tr:last-child > td:nth-of-type(6) > .btn-wrap > .btnz.btnz-outline-danger.btnz-xs.speaker_delete").click()
        cy.get(".yes_button").click();
        cy.wait(2000)
        return this;
    }
}
export default Speaker;