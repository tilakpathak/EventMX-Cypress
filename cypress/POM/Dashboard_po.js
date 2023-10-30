class Dashboard {
    UserDashboard() {
        cy.get("#navbar").contains('Dashboard').click()
        cy.wait(2000)
        cy.url().should('include', '/backend');
        return this;
    }

    Events() {
        cy.get("li:nth-of-type(1) > .nav-link > p").click()
        cy.wait(2000)
        cy.url().should('include', '/events');
         return this;
        }

    ArchivedEvent() {
        cy.get("li:nth-of-type(2) > .nav-link > p").click({ force: true })
        cy.wait(2000)
        cy.url().should('include', '/archived');
        return this;
    }

    EventGallary() {
        cy.get("li:nth-of-type(3) > .nav-link > p").click({ force: true })
        cy.wait(2000)
        cy.url().should('include', '/gallery');
        return this;
    }

    OrganizerFAQs() {
        cy.get("li:nth-of-type(4) > .nav-link > p").click({ force: true })
        cy.wait(2000)
        cy.url().should('include', '/all/faqs');
        return this;
    }

    InvitationAttachment() {
        cy.get("li:nth-of-type(5) > .nav-link > p").click({ force: true })
        cy.wait(2000)
        cy.url().should('include', '/mail_attachments');
        return this;
    }

    Logout() {
        cy.wait(2000)
        cy.get('.nav-link > .fa-user.far').click();
        cy.wait(2000)
        cy.get(".dropdown-item:nth-of-type(2)").click({ force: true });
        cy.url().should('include', 'events.kodiary.com');
        return this;
    }

};
export default Dashboard;