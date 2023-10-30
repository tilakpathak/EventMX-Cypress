///<reference types="Cypress"/>
import Login from "../POM/Login_po";
import { faker } from "@faker-js/faker";

describe("Test for login page", () => {
  const login = new Login();

  before(function () {
    cy.visitMainPage();
  });

  beforeEach(function () {
    // Extract the CSRF token from the cookies and set it as a default header
      cy.getCookie('csrftoken').then((cookie) => {
      Cypress.Cookies.preserveOnce('sessionid', 'csrftoken');
      cy.wrap(cookie.value).as('csrfToken');
    });
  });
 
  const username = faker.internet.email();
  const password = faker.internet.password();

  it("should validate empty login error message", () => {
    login.clickSubmitBtn().verifyInvalidCredentials();
  });

  it("Empty email validation testing", () => {
    login.typePassword(password);
    login.clickSubmitBtn().verifyemptyEmail();
  });

  it("Empty password validation testing", () => {
    cy.get("#id_password").clear();
    login.typeUserName(username);
    login.clickSubmitBtn().verifyemptyPassword();
  });

  it("Worng email and wrong password validation testing", () => {
    login.typeUserName(username).typePassword(password);
    login.clickSubmitBtn().verifyInvalidLogin();
  });

  it("verify google login testing", () => {
    login.verifyGoogleLogin();
  });

  it("verify forgot password testing", () => {
    login.verifyForgotPassword();
  });

  it("should validate valid login success message", () => {
    cy.visitMainPage();
    cy.login();
    cy.request("GET", "https://events.kodiary.com")
      .then(response => {
       expect(response.status).to.eq(200);
      })
  }); 
});