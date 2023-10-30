///<reference types="Cypress"/>
import ArchivedEvent from "../POM/ArchivedEvent_po";

describe("Test for Create Event", () => {
  const Archivedevent = new ArchivedEvent();

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
    Archivedevent.UserDashboard();
  });

  it("should redirect to the Archived event page", () => {
    Archivedevent.Archived();
  });

  it("should restore the archived event", () => {
    Archivedevent.Restore();
  });

  it("should restore the Random event", () => {
    Archivedevent.RestoreRandomEvent();
  });


});
