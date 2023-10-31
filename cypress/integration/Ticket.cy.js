///<reference types="Cypress"/>
import Ticket from "../POM/Ticket_po";

describe("Test for Create Event", () => {
  const ticket = new Ticket();

  before(function () {
    cy.login();
  });

  beforeEach(function () {
    // Extract the CSRF token from the cookies and set it as a default header
      cy.getCookie('csrftoken').then((cookie) => {
      Cypress.Cookies.preserveOnce('sessionid', 'csrftoken');
      cy.wrap(cookie.value).as('csrfToken');
    });
  });

  it("should redirect to the User Dashboard", () => {
    ticket.UserDashboard();
  });

  it("should redirect to the Event List page", () => {
    ticket.EventsList();
  });

  it("should redirect to the Event Board", () => {
    ticket.Go();
  });

  it("should able to redirect to the add ticket page", () => {
    ticket.TicketPage();
  });

  it("should able to create ticket", () => {
    ticket.CreateTicket();
  });

  
  it("should able to Active - InActive ticket", () => {
    ticket.ActiveInactive();
  });

  it("should able to edit ticket", () => {
    ticket.EditTicket();
  });
    
  it("should able to delete ticket", () => {
    ticket.DeleteTicket();
  });

});