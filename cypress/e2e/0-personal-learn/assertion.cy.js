/// <reference types="cypress" />

describe('Browser Action', () => {
    it('Should load correct URL', () => { // Mengubah "url" menjadi "URL" untuk keseragaman
        cy.visit('https://example.com/', { timeout: 10000 });
        cy.url().should('include', 'example.com');
        cy.get('h1').should('be.visible')
    });
});