/// <reference types="cypress" />

describe('login-form', () => {
    it('should keep me sign in', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
        cy.get("#user_remember_me").check()
    });
});