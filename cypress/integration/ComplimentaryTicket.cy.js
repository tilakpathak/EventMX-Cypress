///<reference types="Cypress"/>
import ComplimentaryTicket from "../POM/ComplimentaryTicket_po";

describe("Test for Create Event", () => {
  const complimentaryticket = new ComplimentaryTicket();

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
    complimentaryticket.UserDashboard();
  });

  it("should redirect to the Event List page", () => {
    complimentaryticket.EventsList();
  });

  it("should redirect to the Event Board", () => {
    complimentaryticket.Go();
  });

  it("should able to redirect to the add Complimentary ticket", () => {
    complimentaryticket.Cticket();
  });

  it("should not be able to create Complimentary ticket with empty field", () => {
    complimentaryticket.EmptyFieldValidation();
  });

  it("Field validation testing", () => {
    complimentaryticket.FieldValidation();
  });

  // it("should able to add complimentary ticket", () => {
  //   complimentaryticket.AddComplimentaryTicket();
  // });

  it("should able to enter random data for complimentary ticket", () => {
    complimentaryticket.Randomdata();
  });

});