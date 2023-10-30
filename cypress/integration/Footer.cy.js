
///<reference types="Cypress"/>
import Footer from "../POM/Footer_po";

describe("Test for footer links", () => {
  const footer = new Footer();

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
  
  it("should redirect to the Home page", () => {
    footer.EventMxLogo();
  });

  it("should redirect to the Home page", () => {
    footer.Home();
  });

  it("should redirect to the AboutUs page", () => {
    footer.AboutUs();
  });

  it("should redirect to the Privacy Policy page", () => {
    footer.PrivacyPolicy();
  });

  it("should redirect to the Terms and conditions page", () => {
    footer.TermsAndCondition();
  });

  it("should redirect to the organizers page", () => {
    footer.Organizers();
  });

  it("should redirect to the Events page", () => {
    footer.Events();
  });

  it("should redirect to the FAQs page", () => {
    footer.FAQs();
  });

  it("should redirect to the ContactUs page", () => {
    footer.ContactUs();
  });

  it("should redirect to the Location", () => {
    footer.Location();
  });

  it("should be able to view phone number", () => {
    footer.PhoneNumber();
  });

  it("should be able to view email", () => {
    footer.Email();
  });

  it("should redirect to the Home page", () => {
    footer.EventMX2023();
  });

  it("should redirect to the kodiary website", () => {
    footer.KodiaryLogo();
  });

});