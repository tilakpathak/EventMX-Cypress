describe("API Testing: Signup new user", () => {
    it("should successfully signup a new user", () => {
        const requestBody = {
            First_Name: "Bikash",
            Last_Name: "Shrestha",
            Phone_Number: "9815656893",
            Country: "Nepal",
            Provience: "Bagmati",
            Zip_Code: "44444",
            City: "Baneshwor",
            Email: "Bikash@mailinator.com",
            Password: "asd@123!",
            confirm_Password: "asd@123!"
        };

        cy.request({
            method: 'POST',
            url: 'https://events.kodiary.com/accounts/signup/',
            headers: {
                'content-Type':'application/json'
            },
            body: {
                ...requestBody,
                Email: "Bikash@mailinator.com"
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.First_Name).to.eq("Bikash");
            expect(response.body.Last_Name).to.eq("Shrestha");
            expect(response.body.Email).to.eq("Bikash@mailinator.com");
            expect(response.body.Zip_Code).to.eq("44444"); // Note: Zip_Code is treated as a string
        });
    });
});