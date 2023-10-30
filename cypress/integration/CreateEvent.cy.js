///<reference types="Cypress"/>
import CreateEvent from "../POM/CreateEvent_po";

describe("Test for Create Event", () => {
  const createevent = new CreateEvent();

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
    createevent.UserDashboard();
  });

  it("should able to create Event successfully", () => {
    createevent.eventCreate();
  });

});
