class ArchivedEvent {
    UserDashboard() {
        cy.get("#navbar").contains('Dashboard').click()
        cy.wait(2000)
        cy.url().should('include', '/backend');
        return this;
    }

    Archived() {
        cy.get("li:nth-of-type(2) > .nav-link > p").click({ force: true })
        cy.wait(2000)
        cy.url().should('include', '/events/archived');
        return this;
    }

    Restore() {
        cy.get("tbody tr:first-child  .btnz.btnz-outline-primary.btnz").click({ force: true })
        cy.wait(2000)
        cy.get(".yes_button").wait(2000).click();
        cy.url().should('include', '/events');
        return this;
    }

    RestoreRandomEvent() {
        cy.wait(2000)
        cy.get("li:nth-of-type(2) > .nav-link > p").click({ force: true })
        // Get the total number of archived events
        cy.get("tbody tr").its('length').then(totalEvents => {
            // Generate a random index within the range of total archived events
            const randomIndex = Math.floor(Math.random() * totalEvents) + 1;
            
            // Click the restore button of the randomly selected event
            cy.get(`tbody tr:nth-child(${randomIndex}) .btnz.btnz-outline-primary.btnz`).click({ force: true });
            cy.wait(2000);
            
            // Confirm the restoration
            cy.get(".yes_button").wait(2000).click();
            cy.url().should('include', '/events');
        });
        
        return this;
    } 

}
export default ArchivedEvent;