///<reference types="Cypress"/>
import SurveyForm from "../POM/SurveyForm_po";

describe("Test for Create Event", () => {
  const Surveyform = new SurveyForm();

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
    Surveyform.UserDashboard();
  });

  it("should redirect to the Event List page", () => {
    Surveyform.EventsList();
  });

  it("should redireted to the create survey form page and should be able to drag and drop the required field", () => {
    Surveyform.performDragAndDrop();
  });

});
