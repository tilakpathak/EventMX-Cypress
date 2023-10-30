///<reference types="Cypress"/>
import InvAttachments from "../POM/InvAttachments_po";

describe("Test for Create Event", () => {
  const Invattachments = new InvAttachments();

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
    Invattachments.UserDashboard();
  });

  it("should redirect to the invitation attachments Page", () => {
    Invattachments.Invitation();
  });
  
  it("should redirect to the add attachments Page", () => {
    Invattachments.addAttachments();
  });

  it("should delete the added attachments", () => {
    Invattachments.deleteAttachments();
  });
  
  it("should edit the added attachments", () => {
    Invattachments.editAttachments();
  });


});
