///<reference types="Cypress"/>
import Signup from "../POM/Signup_po";

describe("Test for signup page", () => {
    const signup = new Signup();

    before(function () {
        cy.visitMainPage();
        cy.get(".mb-4 a").click();
        cy.request("GET", "https://events.kodiary.com/accounts/signup/")
            .then(response => {
                expect(response.status).to.eq(200);
            })
    });

    Cypress.Cookies.defaults({
        preserve: "csrftoken",
    });

    it("should validate empty error message", () => {
        signup.empty();
    });

    it('field validation testing', () => {
        signup.fieldValidation();
    });

    it("should validate password and confirm password donot match", () => {
        signup.passwordMismatch();
    });

    it("should fill Random data and register the user", () => {
        signup.randomdata();
    });

    it("should verified the email already exist", () => {
        signup.EmailAlreadyExist();
    });

    it("should be able to enter valid data", () => {
        signup.Manualtype();
    });

    it("should redirect to the login page", () => {
        signup.Login();
    });

});