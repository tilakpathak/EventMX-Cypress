class Footer {
    EventMxLogo() {
        cy.get(".sub-footer").scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.get(".subfooter-logo").click({ force: true });
        cy.scrollTo('top');
        cy.wait(2000);
        cy.get(".my-banner h3").should("have.text", "Discover - Explore - Experience");
        return this;
    }

    Home() {
        cy.scrollTo('bottom');
        cy.get(".sub-footer .sf-box a").contains('Home').click()
        cy.scrollTo('top');
        cy.wait(2000);
        cy.get(".my-banner h3").should("have.text", "Discover - Explore - Experience");
        return this;
    }

    AboutUs() {
        cy.scrollTo('bottom');
        cy.get(".sub-footer .sf-box a").contains('About Us').click().wait(200)
        cy.get(".pb-0 h2").should("have.text", "About Us");
        return this;
    }

    PrivacyPolicy() {
        cy.scrollTo('bottom');
        cy.get(".sub-footer .sf-box a").contains('Privacy Policy').click()
        cy.get("h2").should("have.text", "Privacy Policy");
        return this;
    }

    TermsAndCondition() {
        cy.scrollTo('bottom');
        cy.get(".sub-footer .sf-box a").contains('Terms And Conditions').click()
        cy.get("h2").should("have.text", "Terms And Conditions");
        return this;
    }

    Organizers() {
        cy.wait(2000);
        cy.scrollTo('bottom');
        cy.get("[href='\/all-organizer\/']").click({ force: true })
        cy.get("h2").should("have.text", "Organizer List");
        return this;
    }

    Events() {
        cy.scrollTo('bottom');
        cy.xpath('//*[@id="footer"]/div/div[1]/div/div[3]/div/ul/li[2]/a').click();
        cy.get("h2").should("have.text", "Upcoming Events");
        return this;
    }

    FAQs() {
        cy.scrollTo('bottom');
        cy.get(".sub-footer").scrollIntoView().should('be.visible');
        cy.get("[href=' \/faqs\/']").click();
        cy.get("h2").should("have.text", "Frequently Asked Questions");
        return this;
    }

    ContactUs() {
        cy.scrollTo('bottom');
        cy.get(".sub-footer").scrollIntoView().should('be.visible');
        cy.xpath('//*[@id="footer"]/div/div[1]/div/div[3]/div/ul/li[4]/a').click();
        cy.get("h2").should("have.text", "Contact Us");
        return this;
    }

    Location() {
        cy.get(".sub-footer").scrollIntoView().should('be.visible');
        cy.contains('Steel Tower, Jawlakhel,Lalitpur, Nepal').should('be.visible');
        return this;
    }

    PhoneNumber() {
        cy.get(".sub-footer").scrollIntoView().should('be.visible');
        cy.contains('+977-9841612591').should('be.visible');
        return this;
    }

    Email() {
        cy.get(".sub-footer").scrollIntoView().should('be.visible');
        cy.contains('info@eventmx.com').should('be.visible');
        return this;
    }

    EventMX2023() {
        cy.get(".main-footer").scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.get("[class='col-md-6 d-flex align-items-center'] [href]").click({ force: true })
        cy.scrollTo('top');
        cy.get(".my-banner h3").should("have.text", "Discover - Explore - Experience");
        return this;
    }

    KodiaryLogo() {
        cy.get(".main-footer").scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.get(".kodiary-logo").click({ force: true })
        cy.url().should('include', 'kodiary.com');
        return this;
    }

};

export default Footer;