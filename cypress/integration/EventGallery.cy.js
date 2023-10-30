///<reference types="Cypress"/>
import EventGallery from "../POM/EventGallery_po";

describe("Test for Create Event", () => {
  const eventgallery = new EventGallery();

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
    eventgallery.UserDashboard();
  });

  it("should redirect to the Event Gallery Page", () => {
    eventgallery.Gallery();
  });
  
  it("should able to add and delete the images", () => {
    eventgallery.AddImages();
  });

});
