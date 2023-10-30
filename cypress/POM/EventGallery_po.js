class EventGallery {
  UserDashboard() {
    cy.get("#navbar").contains('Dashboard').click()
    cy.wait(2000)
    cy.url().should('include', '/backend');
    return this;
  }

  Gallery() {
    cy.get("li:nth-of-type(3) > .nav-link > p").click({ force: true })
    cy.wait(2000)
    cy.url().should('include', '/gallery');
    return this;
  }
  
  AddImages() {
    // Click on the button to add images
    cy.get(".btn.btn-blue.mr-0").click();
    // Attach image files
    cy.get("input#id_original_image").attachFile(["football.jpg", "cmpunk.jpg"]);
    // Get the options from the dropdown list
    cy.get("#id_event").find("option").then((options) => {
      // Generate a random index to select a random option
      const randomIndex = Math.floor(Math.random() * options.length);
      // Get the value of the selected option
      const selectedValue = options[randomIndex].value;
      // Select the random option from the dropdown
      cy.get("select").select(selectedValue);
      // Click on the submit button
      cy.get("[type='submit']").click();
      // Wait for 2 seconds
      cy.wait(2000);

      // Delete the last photo from the table
      cy.get("tbody tr:last-child .table-img-box-lg:last-child [onclick]")
        .realHover()// Hover over delete icon
        .click({ force: true }); //click the delete icon
      cy.get(".btn.btn-danger").click(); // Click on the delete pop box
    });

    return this;
  }

  // AddImages() {
  //   cy.get(".btn.btn-blue.mr-0").click();
  //   cy.get("input#id_original_image").attachFile("football.jpg");
  //   cy.get("#id_event").select('Invitation event test');
  //   cy.get("[type='submit']").click();
  //   cy.wait(2000)
  //   //deleted the last row last photo from the table.
  //   cy.get("tbody tr:last-child .table-img-box-lg:last-child [onclick]").realHover().click({ force: true }); //hover delete icon id
  //   cy.get(".btn.btn-danger").click()
  //   return this;
  // }

}
export default EventGallery;