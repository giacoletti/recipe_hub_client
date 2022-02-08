/* eslint-disable no-undef */
describe("User can log in ", () => {
  before(() => {
    cy.intercept("POST", "/api/auth/sign_in", {
      fixture: "authenticatedUserResponse.json"
    });
    cy.intercept("GET", "/api/auth/validate_token", {
      fixture: "authenticatedUserResponse.json",
      headers: { uid: "johnskoglung@test.com", token: "123456789" }
    });
    cy.visit("/");
    cy.get("[data-cy=email-field]").type("johnskoglung@test.com");
    cy.get("[data-cy=password-field]").type("password");
    cy.get("[data-cy=login-button]").click();
    
  });
});
