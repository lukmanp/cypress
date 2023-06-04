/// <reference types='cypress'/>

describe("Working with inputs", () => {
  beforeEach(() => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    // cy.url().should("include", "/login.html");
  });

  it("Should fill username", () => {

    // Input username
    cy.get("#user_login").clear(); // menggunakan ID
    cy.get("#user_login").type("username"); // menggunakan ID

    // Input Password
    cy.get('input[name="user_password"]').clear();
    cy.get('input[name="user_password"]').type("password");

    // Klik keep me signed in
    cy.get('#user_remember_me').click()
    cy.get('#user_remember_me').should('have.prop', 'checked') //centang cekbox otomatis

    // Klik tombol sign in
    cy.get('.btn-primary').click()
  });
});
