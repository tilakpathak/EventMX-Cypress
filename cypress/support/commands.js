/// <reference types="Cypress" />
import 'cypress-file-upload'
/// <reference types="cypress-xpath" />
import 'cypress-real-events/support';

Cypress.Commands.add("visitMainPage", () => {
    cy.request('GET','https://events.kodiary.com/')
    .its('status')
    .should('equal',200);
    cy.visit(Cypress.env("baseUrl"));
    cy.get("#navbar li:nth-of-type(6) .btn-primary").click();
    cy.request("GET", "https://events.kodiary.com/accounts/login/")
      .then(response => {
       expect(response.status).to.eq(200);
      })
  });
  
  Cypress.Commands.add("login", () => {
    cy.visit(Cypress.env("baseUrl"));
    cy.get("#navbar li:nth-of-type(6) .btn-primary").click();
    cy.request("GET", "https://events.kodiary.com/accounts/login/")
    .then(response => {
      expect(response.status).to.eq(200);
     })
    const username = Cypress.env("username");
    const password = Cypress.env("password");

    cy.get("#id_login").clear().type(username);
    cy.get("#id_password").clear().type(password);
    cy.get("button").click();
  
  });

  Cypress.Commands.add('getIframe', (iframe) => {
    return cy.get(iframe)
        .its('.django-ckeditor-widget')
        .should('be.visible')
        .then(cy.wrap);
});

//   Cypress.Commands.add("logout", () => {
//     cy.get('.nav-link > .fa-user.far').realHover();
//     cy.wait(2000)
//     cy.get(".dropdown-item:nth-of-type(2)").click({ force: true });
// });
  
//   Cypress.Commands.add("preserveCookies", () => {
//     Cypress.Cookies.preserveOnce("ASP.NET_SessionId");
//     cy.url().should("include", "azurewebsites.net/Dashboard");
//   });
  
//   Cypress.Commands.add("preserveCookies", () => {
//     Cypress.Cookies.preserveOnce("ASP.NET_SessionId");
//   });