/// <reference types="cypress" />

describe('My First Test', () => {
    it('Visits the kitchen sink', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', '')
    })
})