/// <reference types="cypress" />

describe("Tugas My First Test", () => {
  it('clicking "type" shows the right headings', () => {
    cy.visit("https://example.cypress.io")
    // cy.pause();

    cy.contains("type").click()

    //Shouldbe on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    //Get an input, type into it and verify tha the value has been updated
    cy.get('.action-email')
    .type('lukmann.prayogi@gmail.com')
    .should('have.value', 'lukmann.prayogi@gmail.com')
  })
});
