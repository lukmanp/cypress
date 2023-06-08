/// <reference types="cypress" />


describe('open menu all item', () => {
    it('should "All item menu" visible', () => {
        cy.clearCache() 
        cy.visit('https://www.saucedemo.com/')
    
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user-name').type(username)
            cy.get('#password').type(password)
            cy.get('#login-button').click()
            cy.get('#react-burger-menu-btn').click()
            cy.get('#inventory_sidebar_link').contains('All Items')
    
        })

    });
    
});
Cypress.Commands.add("clearCache", () => {
    cy.window().then((win) => {
      win.caches.keys().then((cacheNames) => {
        cacheNames.forEach((cacheName) => {
          win.caches.delete(cacheName);
        });
      });
    });
  });