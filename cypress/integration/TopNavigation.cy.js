
///<reference types="Cypress"/>
import TopNavigation from "../POM/TopNavigation_po";

describe("Test for Home page", () => {
  const topnavigation = new TopNavigation();

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

  it("should redirect to the home page", () => {
    topnavigation.EventMxLogo();
  });

  it("should redirect to the AboutUs page", () => {
    topnavigation.AboutUs();
  });

  it("should redirect to the Events page", () => {
    topnavigation.Events();
  });

  it("should redirect to the FAQs page", () => {
    topnavigation.FAQs();
  });

  it("should redirect to the ContactUs page", () => {
    topnavigation.ContactUs();
  });

  it("should redirect to the TicketCart page", () => {
    topnavigation.Cart();
  });

  it("should redirect to the Dashboard", () => {
    topnavigation.Dashboard();
  });

  it("should redirect to the Edit Profile page", () => {
    topnavigation.Profile();
  });

  it("should redirect to the Purchased ticket page", () => {
    topnavigation.Ticket();
  });

  it("should redirect to the EventMx website", () => {
    topnavigation.Logout();
  });

});

