/// <reference types='cypress'/>

describe("Working with inputs", () => {
    beforeEach(() => {
      cy.visit("http://zero.webappsecurity.com/bank/pay-bills.html");
    });
  
    it("Should fill username, password and click login", () => {
      cy.fixture("user").then((user) => {
        const username = user.uname;  // uname adalah param yang di set di user.json
        const password = user.pass; // pass adalah param yang di set di user.json  
        const amount = user.amount // amount adalah param yang di set di user.json  
        const date = user.date // date adalah param yang di set di user.json  
        const description = user.description // descroption adalah param yang di set di user.json  
  
        // ************* Awal Login dengan custom commands *********
      cy.login(username, password)
  
        // ************* Akhir Login dengan custom commands *********

        // klik tab pay-bills
        cy.get('#pay_bills_tab').click()

        // assertion
        cy.get("h2").should('contain.text' , 'Make payments to your saved payees')

        // execute commands paybills
        cy.paybills(amount, date, description)
        
      });
    });
  });
  