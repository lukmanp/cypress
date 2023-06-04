// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// **** Commands Login ****
Cypress.Commands.add('login', (username, password) => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()

    // Input username
    cy.get("#user_login").clear(); // menggunakan ID
    cy.get("#user_login").type(username); // menggunakan ID

    // Input username
    cy.get('input[name="user_password"]').clear(); 
    cy.get('input[name="user_password"]').type(password);

    // Klik keep me signed in
    cy.get("#user_remember_me").click();

    // Klik tombol sign in
    cy.get(".btn-primary").click();
})

//  ******* Commands pay-bills **********
Cypress.Commands.add('paybills', (amount, date, description) => {
    cy.clearAllCookies() // clear all cookies
    cy.clearAllLocalStorage() // clear all storage

    cy.get('#sp_amount').clear()
    cy.get('#sp_amount').type(amount)

    cy.get('#sp_date').click()
    cy.get('.ui-state-default').contains(date).click()
    
    cy.get('#sp_description').clear()
    cy.get('#sp_description').type(description)
    
    cy.get("#pay_saved_payees").click();

    // cy.get("#alert_content").should('contain.text' , 'The payment was successfully submitted.')

    
})
