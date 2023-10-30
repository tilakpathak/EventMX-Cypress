
///<reference types="Cypress"/>
import Home from "../POM/Home_po";

describe("Test for Home page", () => {
  const home = new Home();
 
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

  it("should search the event by title", () => {
    home.SearchByTitle();
  });

  it("should redirect to detail of featured event", () => {
    home.Featured();
  });

  it("should search all event", () => {
    home.FilterAll();
  });

  it("should search week event", () => {
    home.FilterWeek();
  });

  it("should search Month event", () => {
    home.FilterMonth();
  });

  it("should redirect to the event page", () => {
    home.SeeMoreBtn();
  });

  it("should redirect to the archive event page", () => {
    home.EventArchiveBtn();
  });

  it.only("should search event by Category type", () => {
    home.EventCategory();
  });

});
