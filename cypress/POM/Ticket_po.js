class Ticket {
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

    TicketPage() {
        cy.get(".col-md-12 > li:nth-of-type(5)").click()
        cy.wait(2000);
        cy.get(".btn.btn-blue.mr-0").click();
        return this;
    }
    
    CreateTicket() {
        cy.wait(2000);
        cy.get("#id_title").type("Ghatasthapan ticket")
        cy.get("span[role='combobox'] > span[role='presentation']").click().wait(2000)
        cy.get("ul#select2-id_ticket_type-results > li[role='option']").click().wait(2000)
        cy.get('#id_event_detail').select("Larissa Gross")
        cy.get("#id_all_event_time").click()
        cy.get("#id_amount_rs").clear().type("5000")
        cy.get(".select2-search__field").type("lunch").wait(2000)
        cy.get(".select2-results__option").click()
        cy.get(".btn-primary").click();
        return this;
    }

    ActiveInactive(){
        cy.get("tr:first-child > :nth-child(7) > .showStatus").click()
        cy.get(".status_yes_button").click()
        cy.get("tr:first-child > :nth-child(7) > .showStatus").click()
        cy.get(".status_yes_button").click()
        return this;
    }

    EditTicket(){
        cy.get("tr:first-child > :nth-child(8) > .btn-wrap > .btnz-outline-default").click()
        cy.get("#id_amount_rs").clear().type("7000").wait(2000)
        cy.get('#id_event_detail').select("Larissa Gross")
        cy.get(".btn-primary").click();
        cy.get(".alert-success").should("have.text", "Tickets updated successfully")
        return this;
    }

    DeleteTicket(){
        cy.get("tr:first-child > :nth-child(8) > .btn-wrap > .delete_ticket").click()
        cy.get(".yes_button").click();
        return this;
    }
}
export default Ticket;