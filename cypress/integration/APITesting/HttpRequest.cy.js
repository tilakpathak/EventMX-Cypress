describe("HTTP Request",()=>{

    it("GET Call", ()=>{
        cy.request('GET','https://events.kodiary.com/')
        .its('status')
        .should('equal',200);
    })

    
})

