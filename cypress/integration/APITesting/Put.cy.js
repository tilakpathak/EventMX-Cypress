describe("api testing", () => {
    it("Login user", () => {
        const requestBody = {
            Email: "eventmx@mailinator.com",
            Password: "asd@123!"
        };

        cy.request({
            method: 'POST',
            url: 'https://events.kodiary.com/accounts/login/',
            headers: {
                "Referer": "https://events.kodiary.com" // Add the Referer header here
            },
            body: requestBody
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});