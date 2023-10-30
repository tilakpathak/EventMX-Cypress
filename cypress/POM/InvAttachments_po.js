class InvAttachments {
    UserDashboard() {
        cy.get("#navbar").contains('Dashboard').click()
        cy.wait(2000)
        cy.url().should('include', '/backend');
        return this;
    }

    Invitation() {
        cy.get("li:nth-of-type(5) > .nav-link > p").click({ force: true })
        cy.wait(2000)
        cy.url().should('include', '/mail_attachments');
        return this;
    }

    addAttachments() {
        cy.wait(2000);
        cy.get(".btn.btn-blue.mr-0").click();
        cy.get("#id_title").type("This for testing the file attachments")
        cy.get("#id_file").attachFile("football.jpg");
        cy.get(".btn.btn-primary").click();
        return this;
    }

    deleteAttachments() {
        cy.wait(2000);
        cy.get("tbody tr:last-child .btnz-outline-danger").click(); //deleted the last row of the table.
        cy.get(".yes_button").click();
        return this;
    }

    editAttachments() {
        cy.wait(2000);
        cy.get("tbody tr:first-child .btnz-outline-default").click(); //Editing the first row of the table.
        cy.get("#id_title").clear().type("This for edit testing the file attachments")
        cy.get("#id_file").attachFile("testing.pdf");
        cy.get(".btn.btn-primary").click();
        return this;
    }

}
export default InvAttachments;