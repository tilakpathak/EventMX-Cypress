class ScheduleEvent {
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

    ScheduleList() {
        cy.get(".col-md-12 > li:nth-of-type(2)").click()
        return this;
    }

    ScheduleEvent() {
        cy.get(".btn.btn-blue.btn-sm.mr-0").click()
        cy.wait(2000);
        cy.get('#id_title').type('First-DAY || Dashain')
        cy.get('#changeLocation').click()
        cy.get('.yes_button').click()
        cy.get('#pac-input').type("LOD - Lord of the Drinks").get('.pac-container .pac-item:first-child').click();
        cy.get(".cke_wysiwyg_frame").then(function ($iframe) {
            let iframebody = $iframe.contents().find('body')
            cy.wrap(iframebody)
                .type("The first day of Dashain is known as Ghatasthapana. Come and enjoy the day with uS")

            cy.get('#eventstarttime').type("06:10:00");
            cy.get('#eventendtime').type("11:10:00");
            cy.get('#ed_title').type("Ghatasthapan")
            // cy.get('#id_ticket_required').click()
            cy.get('#event_time_description').type("Dashain 2080 wowowowowow coming soon")
            cy.get("input[name='_save']").click();
            cy.get("a#addSession").click();
            cy.get('#eventstarttime').type("01:10:00");
            cy.get('#eventendtime').type("02:10:00");
            cy.get('#ed_title').type("Ending-tika")
            cy.get('#event_time_description').type("KIng put Tika")
            cy.get("a#addSession").click();
            cy.get("[name='_save']").click();
            cy.wait(2000);
            cy.get("[href='\/events\/'] .fa-calendar-alt").click()
        })
        return this;
    }

    EditSession() {
        cy.wait(2000);
        cy.get("tbody tr:nth-of-type(1) td:nth-of-type(8) .btnz-xs:nth-of-type(1)").click()
        cy.get(".col-md-12 > li:nth-of-type(2)").click()
        cy.get("tbody tr:last-child .btnz-outline-default").click();
        cy.get("tr:first-child > td:nth-of-type(6) > a:nth-of-type(1)").click()
        cy.get('#event_time_description').clear().type("Sakaidim la  edit gardeko session lai...!!!")
        cy.get("#addSession").click()
        cy.get("[name='_save']").click();
        return this;
    }

    EditSchedule() {
        cy.get("tbody tr:last-child .btnz-outline-default").click();
        cy.get(".cke_wysiwyg_frame").then(function ($iframe) {
            let iframebody = $iframe.contents().find('body')
            cy.wrap(iframebody)
                .clear()
                .type(" Come and enjoy the Ghatasthapan with uS !!!!!")
                .wait(2000);
            cy.get("[name='_save']").click();
        })
        return this;
    }

    deleteSchedule() {
        cy.get("tbody tr:last-child .btnz.btnz-outline-danger.btnz-xs.delete_event_detail").click();
        cy.get(".yes_button").click();
        return this;
    }

}
export default ScheduleEvent;