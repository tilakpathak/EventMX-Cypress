///<reference types="Cypress"/>
import OrderDetails from "../POM/OrderDetails_po";

describe("Test for Create Event", () => {
  const orderdetails = new OrderDetails();

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
    orderdetails.UserDashboard();
  });

  it("should redirect to the Event List page", () => {
    orderdetails.EventsList();
  });

  it("should redirect to the Event Board", () => {
    orderdetails.Go();
  });

  it("should able to redirect to the order details page", () => {
    orderdetails.ODetails();
  });

  it("should able to download csv file of order details", () => {
    orderdetails.Csv();
  });
  
  it("should able to filters the order details", () => {
    orderdetails.filters();
  });

  it("should redirect to the report page and able to generate ticket and Report", () => {
    orderdetails.GenerateReport();
  });

});