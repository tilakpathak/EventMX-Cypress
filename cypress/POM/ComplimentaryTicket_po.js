import { faker } from "@faker-js/faker";

class ComplimentaryTicket {
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

    Cticket() {
        cy.get(".col-md-12 > li:nth-of-type(8)").click()
        cy.wait(2000);
        cy.get(".btn.btn-blue.mr-0").click();
        return this;
    }

    EmptyFieldValidation() {
        cy.wait(2000);
        cy.get("input[name='_save']").click();
        cy.get("#id_name-error").should("have.text", "Full name is required")
        cy.get("#id_email-error").should("have.text", "Email is required")
        cy.get("#id_phone_number-error").should("have.text", "Phone number is required")
        cy.get("#id_event_ticket-error").should("have.text", "This field is required.")
        return this;
    }

    FieldValidation() {
        cy.wait(2000);
        cy.get("#id_name").type("123456");
        cy.get("#id_email").type("PPkka");
        cy.get("#id_phone_number").type("aaaaaaaaaa")
        cy.get("#id_name-error").should("have.text", "Only alphabetic characters are allowed")
        cy.get("#id_email-error").should("have.text", "The email should be in format: abc@gmail.com")
        cy.get("#id_phone_number-error").should("have.text", "Only numbers are allowed")
    }

    // AddComplimentaryTicket() {
    //     cy.wait(2000);
    //     cy.get("input#id_name").clear().type("tilaktest")
    //     cy.get('#id_email').clear().type("tilak1@mailinator.com")
    //     cy.get("#id_phone_number").clear().type('9815656893')
    //     cy.get('#id_event_ticket').select('Ghatasthapana');
    //     cy.get('.submit-row .btn-primary').click({force: true});       
    //     return this;
    // }


    Randomdata() {
        const data = {
            Name: faker.name.firstName() + ' ' + faker.name.lastName(),
            email: faker.internet.email(),
            phone: faker.phone.number('##########'),
            // ticket:faker.eventticket(),
        };

        // Fill form fields with random data
        cy.get("#id_name").clear().type(data.Name);
        cy.get("#id_email").clear().type(data.email);
        cy.get("#id_phone_number").clear().type(data.phone);

        //Selecting the random ticket from the drop down;                
        cy.get("#id_event_ticket")
            .find("option")
            .then((options) => {
                const randomIndex =
                    Math.floor(Math.random() * (options.length - 1)) + 1;
                cy.wrap(options[randomIndex])
                    .invoke("val")
                    .then((value) => {
                        cy.get("select").select(value);
                    });
            });

        cy.wait(5000);
        cy.get('.submit-row .btn-primary').click({ force: true });

        return data; // Return the generated data for potential further use
    }

}
export default ComplimentaryTicket;