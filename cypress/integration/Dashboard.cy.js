///<reference types="Cypress"/>
import Dashboard from "../POM/Dashboard_po";

describe("Test for User Dashboard", () => {
  const dashboard = new Dashboard();

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
    dashboard.UserDashboard();
  });

  it("should redirect to the Events Page", () => {
    dashboard.Events();
  });

  it("should redirect to the Archived Event List", () => {
    dashboard.ArchivedEvent();
  });

  it("should redirect to the Event Gallery Page", () => {
    dashboard.EventGallary();
  });

  it("should redirect to the OrganizerFAQs page", () => {
    dashboard.OrganizerFAQs();
  });

  it("should redirect to theInvitation attachment Page", () => {
    dashboard.InvitationAttachment();
  });
  
  it("should redirect to the Eventmx website", () => {
    dashboard.Logout();
  });

});