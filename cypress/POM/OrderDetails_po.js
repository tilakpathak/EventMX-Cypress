class OrderDetails {
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
        cy.get("tbody tr:last-child td:nth-of-type(8) .btnz-xs:nth-of-type(1)").click()
        cy.get('.content .row:nth-of-type(3) tr th').should('have.length', 4).should('be.visible');
        return this;
    }

    ODetails() {
        cy.get(".col-md-12 > li:nth-of-type(6)").click()
        cy.get('tr > th').should('have.length', 9).should('be.visible');
        return this;
    }

    filters() {
        cy.get(".d-inline.dropdown.header-body").click()
        cy.get("input[name='user']").type("tilak")
        cy.wait(2000)
        cy.get("input[name='q']").type("00067NC")
        cy.get(".btn.btn-light.btn-primary").click()
        return this;
    }

    Csv() {
        // Click the button to download the file
        cy.get("button:nth-of-type(1) > .btn-inner--text").click();

        // Wait for the file to download, you can use cy.wait for better handling of downloads
        cy.wait(5000);
        // Define the file path where the file is expected to be downloaded
        const filePath = 'C:/Users/tilak/OneDrive/Desktop/EventMX_Automation/cypress/downloads/Order_detail-2023-10-30.xlsx';

        // Check if the file exists at the specified path
        cy.task('fileExists', filePath).should('be.true');
    }

    GenerateReport() {
        cy.get(".btnz.btnz-outline-default.btnz-xs").click()
        cy.get("h2").should("have.text", "Order Report")
        cy.get(".col-md-6 > a:nth-of-type(1)").click().wait(2000);
        cy.get(".yes_button").click().wait(2000);
        cy.get(".alert.alert-success.text-center").should("have.text", "Ticket successfully generated").wait(2000)
        cy.get(".col-md-6 > a:nth-of-type(2)").click().wait(2000)
        cy.get(".yes_button").click()
        return this;
    }
}
export default OrderDetails;