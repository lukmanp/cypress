/// <reference types='cypress'/>

describe("Working with inputs", () => {
  beforeEach(() => {
    cy.visit("http://zero.webappsecurity.com/login.html");
  });

  it("Should fill username, password and click login", () => {
    cy.fixture("user").then((user) => {
      const username = user.uname;  // uname adalah param yang di set di user.json
      const password = user.pass; // pass adalah param yang di set di user.json
      const search = user.search;

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

      // assertion
      // cy.get(".alert-error").should('contain.text' , 'Login and/or password are wrong.')

      cy.get('#searchTerm').clear();
      cy.get('#searchTerm').type(search);
      cy.get('#searchTerm').type('{enter}');

      cy.get('a').should('contain.text', 'Zero - Online Statements')
    });
  });
});
