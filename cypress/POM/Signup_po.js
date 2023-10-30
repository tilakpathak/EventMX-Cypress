import { faker } from "@faker-js/faker";
class Signup {

  constructor() {
    this.errorSelectors = [
      "#id_first_name-error",
      "#id_last_name-error",
      "#id_phone_number-error",
      "#id_country.form-control.error",
      "#id_country-error",
      "#id_province-error",
      "#id_zip_code-error",
      "#id_city-error",
      "#id_email-error",
      "#id_password1-error",
      "#id_password1-error"
    ];

    this.errorMessages = [
      "First name is required",
      "Last name is required",
      "Phone number is required",
      "---------",
      "This field is required.",
      "Province is required",
      "This field is required.",
      "City is required",
      "Email is required",
      "This field is required.",
      "This field is required."
    ];
  }
  empty() {
    cy.get("button").click();

    this.errorSelectors.forEach((selector, index) => {
      cy.get(selector).should("include.text", this.errorMessages[index]);
    });
    return this;
  }

  fieldValidation() {
    cy.get("#id_first_name").type("12@")
    cy.get("#id_last_name").type("35$#")
    cy.get("#id_phone_number").type("abchdddd79")
    cy.get("#id_province").type("1@!@@@")
    cy.get("#id_zip_code").type("@asd!")
    cy.get("#id_city").type("!#$1")
    cy.get("#id_email").type("eventmx")
    cy.get("button").click();
    cy.wait(2000);
    cy.get("#id_first_name-error").should("have.text", "Only alphabetic characters are allowed");
    cy.get("#id_last_name-error").should("have.text", "Only alphabetic characters are allowed");
    cy.get("#id_phone_number-error").should("have.text", "Only numbers are allowed");
    cy.get("#id_country-error").should("have.text", "This field is required.");
    cy.get("#id_province-error").should("have.text", "Only alphabetic characters are allowed");
    cy.get("#id_zip_code-error").should("have.text", "Only numbers are allowed");
    cy.get("#id_city-error").should("have.text", "Only alphabetic characters are allowed");
    cy.get("#id_email-error").should("have.text", "The email should be in format: abc@domain.tld");
    cy.get("#id_password1-error").should("have.text", "This field is required.");
    cy.get("#id_password2-error").should("have.text", "This field is required.");
    return this;
  }

  passwordMismatch() {
    const password1 = faker.internet.password();
    const password2 = faker.internet.password();

    cy.get("#id_password1").clear().type(password1);
    cy.get("#id_password2").clear().type(password2);
    cy.get("button").click();
    cy.get("#id_password2-error").should("be.visible").and("have.text", "Password and Confirm Password value doesn't match");
    return this;
  }

  randomdata() {
    const data = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phone: faker.phone.number('##########'),
      country: faker.address.country(),
      province: faker.address.state(),
      zipCode: faker.address.zipCode('#####'),
      city: faker.address.city(),
      email: faker.internet.email(),
      password: faker.internet.password()
    };

    // Fill form fields with random data
    cy.get("#id_first_name").clear().type(data.firstName);
    cy.get("#id_last_name").clear().type(data.lastName);
    cy.get("#id_phone_number").clear().type(data.phone);
    cy.get("#id_country").select(data.country);
    cy.get("#id_province").clear().type(data.province);
    cy.get("#id_zip_code").clear().type(data.zipCode);
    cy.get("#id_city").clear().type(data.city);
    cy.get("#id_email").clear().type(data.email);
    cy.get("#id_password1").clear().type(data.password);
    cy.get("#id_password2").clear().type(data.password);
    cy.wait(5000)
    cy.get("button").click(); // Submit the form
    cy.wait(2000)
    cy.get("h3.mb-4").should("have.text", "Verify Your E-mail Address");

    return data; // Return the generated data for potential further use
  }
  
  EmailAlreadyExist() {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const mobile = faker.phone.number('##########');
    const country = faker.address.country();
    const province = faker.address.state();
    const zipCode = faker.address.zipCode('#####');
    const city = faker.address.city();
    const password = faker.internet.password();

    cy.get("#id_first_name").type(firstName);
    cy.get("#id_last_name").type(lastName);
    cy.get("#id_phone_number").clear().type(mobile);
    cy.get("#id_country").select(country);
    cy.get("#id_province").clear().type(province);
    cy.get("#id_zip_code").clear().type(zipCode);
    cy.get("#id_city").type(city);
    cy.get("#id_email").clear().type("eventmx@mailinator.com");
    cy.get("#id_password1").clear().type(password);
    cy.get("#id_password2").clear().type(password);
    cy.get("button").click();
    cy.get("p.error").should("have.text", "A user is already registered with this e-mail address.");
    return this;
  }

  Manualtype() {
    cy.get("#id_first_name").clear().type("Tilak")
    cy.get("#id_last_name").clear().type("Pathak")
    cy.get("#id_phone_number").clear().type(9888888888)
    cy.get("#id_country").select('Nepal');
    cy.get('#id_country').should('include.text', 'Nepal');
    cy.get("#id_province").type("Gandaki")
    cy.get("#id_zip_code").clear().type("40000")
    cy.get("#id_city").clear().type("Beghnas")
    cy.get("#id_email").clear().type("eventmx@mailinator.com")
    cy.get("#id_password1").clear().type("asd@123!")
    cy.get("#id_password2").clear().type("asd@123!")
    cy.get("button").dblclick();
    cy.wait(2000);
    cy.get("p.error").should('be.visible').and('include.text', 'A user is already registered with this e-mail address.')
    cy.get("#id_email").clear();
    cy.get("#id_email").type("girish@mailinator.com")
    cy.get("button").dblclick({ force: true });
    return this;
  }

  Login() {
    cy.get("[href='\/accounts\/login\/']").click()
    cy.get('h3 span').should("have.text", "Login Page");
    return this;
  }


}
export default Signup;





//     it('Selecting desire country from the country dropdown testing', () => {
//       cy.get("#id_country").select('Nepal');
//       cy.get('#id_country').should('include.text', 'Nepal');
//     });

//     it('should randomly select a country and assert the selection', () => {
//       cy.get('#id_country').then(countryDropdown => {
//         const options = countryDropdown.find('option:not(:disabled)'); // Exclude disabled options
//         const randomIndex = Math.floor(Math.random() * options.length);
//         const randomCountry = options[randomIndex].text;
//         cy.get('#id_country').select(randomCountry);
//         cy.get('#id_country').should('include.text', randomCountry); });
//     });
// });
// })
