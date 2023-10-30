class CreateEvent {
    UserDashboard() {
        cy.get("#navbar").contains('Dashboard').click()
        cy.wait(2000)
        cy.url().should('include', '/backend');
        return this;
    }

    eventCreate() {
        cy.get("li:nth-of-type(1) > .nav-link > p").click()
        cy.url().should('include', '/events');
        cy.get(".btn.btn-blue.mr-0").click()
        cy.wait(2000);
        cy.get('input#id_title').type('Dashain')
        cy.get('.select2-search__field').first().click()
        cy.get('ul#select2-id_category-results > li:nth-of-type(8)').click();
        cy.get('.select2-search__field').eq(1).click()
        cy.get('ul#select2-id_tags-results > li:nth-of-type(2)').click()
        cy.get('.select2-search__field').last().click()
        cy.get('ul#select2-id_event_type-results > li:nth-of-type(2)').click()
        cy.get('input#getCities').type('Purple Haze Rock').get('.pac-container .pac-item:first-child').click();
        cy.get('#id_is_free_1').click()
        cy.get('#id_start_date').type("2024-01-01")
        cy.get('#id_end_date').type("2024-01-10")
        cy.get('#id_sale_ends_on_date').type("2024-01-10")
        cy.get('input#id_image').attachFile("dashain.jpg");
        cy.get(".btn.btn-primary.js-crop-and-upload").click();

        //Iframe 
        cy.get(".cke_wysiwyg_frame").then(($iframe) => {
            let iframebody = $iframe.contents().find('body');
            cy.wrap(iframebody)
                .clear()
                .type("tHiS iS fOr TeStInG PuRpOsE AuToMaTaTiOn wItH CyPrEsS- DaShAiN EvEnT.")
                .then(() => {
                    cy.get("[type='submit']").click();
                    cy.wait(2000);
                    cy.get("[href='\/events\/'] .fa-calendar-alt").click()
                });
        });
        return this;
    }

};
export default CreateEvent;