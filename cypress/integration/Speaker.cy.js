///<reference types="Cypress"/>
import Speaker from "../POM/Speaker_po";

describe("Test for Create Event", () => {
  const speaker = new Speaker();

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
    speaker.UserDashboard();
  });

  it("should redirect to the Event List page", () => {
    speaker.EventsList();
  });

  it("should redirect to the Event Board", () => {
    speaker.Go();
  });

  it("should able to redirect to the add the Guest/speaker", () => {
    speaker.SpeakerGuest();
  });

  it("should not be able to add speaker with empty field", () => {
    speaker.EmptyFieldValidation();
  });

  it("should able to add the Guest/speaker", () => {
    speaker.AddSpeaker();
  });

  it("should able to edit the Guest/speaker", () => {
    speaker.EditSpeaker();
  });

  it("should able to delete the Guest/speaker", () => {
    speaker.DeleteSpeaker();
  });

});