class TopNavigation {

    EventMxLogo() {
        cy.get("[src='\/static\/assets\/img\/logo\.svg']").click()
        cy.get(".my-banner h3").should("have.text", "Discover - Explore - Experience");
        return this;
    }

    AboutUs() {
        cy.get("#navbar").contains('About Us').click()
        cy.get(".pb-0 h2").should("have.text", "About Us");
        return this;
    }

    Events() {
        cy.get("#navbar").contains('Events').click()
        cy.get("h2").should("have.text", "Upcoming Events");
        return this;
    }

    FAQs() {
        cy.get("#navbar").contains('FAQS').click()
        cy.get("h2").should("have.text", "Frequently Asked Questions");
        return this;
    }

    ContactUs() {
        cy.get("#navbar").contains('Contact Us').click()
        cy.get("h2").should("have.text", "Contact Us");
        return this;
    }

    Cart() {
        cy.get(".cart-link").click()
        cy.get("h2").should("have.text", "Ticket Cart");
        return this;
    }

    Dashboard() {
        cy.get("#navbar").contains('Dashboard').click()
        cy.go(-1);
        return this;
    }

    Profile() {
        cy.get('.profile-nav-box').realHover();
        cy.wait(2000)
        cy.get(".drop-custom > li:nth-of-type(1) > a").click({ force: true });
        cy.get("h2").should("have.text", "Edit Profile");
        return this;
    }

    Ticket() {
        cy.get('.profile-nav-box').realHover();
        cy.wait(2000)
        cy.get("[href='\/customers\/customer_ticket_purchased\/']").click();
        cy.get("h2").should("have.text", "Purchased Ticket");
        return this;
    }

    Logout() {
        cy.get('.profile-nav-box').realHover();
        cy.wait(2000)
        cy.get(".drop-custom > li:nth-of-type(3) > a").click({ force: true });
        cy.url().should('include', 'events.kodiary.com');
        return this;
    }
};
export default TopNavigation;
