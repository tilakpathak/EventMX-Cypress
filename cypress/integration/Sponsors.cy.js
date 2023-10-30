///<reference types="Cypress"/>
import Sponsors from "../POM/Sponsors_po";

describe("Test for Create Event", () => {
  const sponsors = new Sponsors();

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
    sponsors.UserDashboard();
  });

  it("should redirect to the Event List page", () => {
    sponsors.EventsList();
  });

  it("should redirect to the Event Board", () => {
    sponsors.Go();
  });

  it("should able to redirect to the add the partner/sponsor", () => {
    sponsors.partners();
  });

  it("should not be able to add sponsors with empty field", () => {
    sponsors.EmptyFieldValidation();
  });

  it("should able to add the partner/sponsors", () => {
    sponsors.AddSponsors();
  });

  it("should able to edit the partner/sponsors", () => {
    sponsors.EditSponsors();
  });

  it("should able to delete the partner/sponsors", () => {
    sponsors.DeleteSponsors();
  });

});