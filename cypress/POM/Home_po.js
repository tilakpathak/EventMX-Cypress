class Home {
    SearchByTitle() {
        cy.get(".form-control").click({ force: true }).type("NWC");
        cy.scrollTo('top');
        cy.get(".btn-b-search").click({ force: true })
        cy.get(".ea-content h4").should('include.text', 'Nepal Warriors Championship || NWC')
        cy.go(-1);
        return this;
    }

    Featured() {
        cy.get(".carousel-control-next-icon").click({ force: true })
        cy.get(".carousel-control-next-icon").click({ force: true })
        cy.xpath('//*[@id="b-carousel-2"]/div[2]/div[1]/div/a').click({ force: true })
        cy.go(-1);
        return this;
    }

    FilterAll() {
        cy.get(".day-select").scrollIntoView().should('be.visible');
        cy.get("#all_button").click({ force: true })
        cy.get("#UpcomingEventsDiv").should('exist'); // Wait until some element representing the result is visible
        return this;
    }

    FilterWeek(){
        cy.get(".day-select").scrollIntoView().should('be.visible');
        cy.get("#week_button").click({ force: true })
        cy.get("#UpcomingEventsDiv").should('exist'); 
        return this;
    }

    FilterMonth(){
        cy.get(".day-select").scrollIntoView().should('be.visible');
        cy.get("#month_button").click({ force: true })
        cy.get("#UpcomingEventsDiv").should('exist'); 
        return this;
    }

    SeeMoreBtn(){
        cy.get(".day-select").scrollIntoView().should('be.visible');
        cy.xpath('//*[@id="main"]/section[2]/div/div[3]/a').click({ force: true })
        cy.get(".event-features-wrap").should('exist'); 
        cy.go(-1);
        return this;
    }

    EventArchiveBtn(){
        cy.xpath("//main[@id='main']/section[3]/div/div[2]").scrollIntoView().should('be.visible')
        cy.xpath('//*[@id="main"]/section[3]/div/div[3]/a').click({ force: true })
        cy.get(".container").should('exist'); 
        cy.go(-1);
        return this;
    }

    EventCategory(){
        cy.get(".row.te-wrap").scrollIntoView().should('be.visible')
        cy.xpath('//*[@id="main"]/section[4]/div/div[2]/div[1]/a/div/img').click({ force: true })
        cy.get(".container").should('exist'); 
        cy.go(-1);
        return this;
    }

};
export default Home;