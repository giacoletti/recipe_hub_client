/* eslint-disable no-undef */
describe("User", () => {
  before(() => {
    cy.intercept("GET", "/api/recipes", {
      fixture: "recipesIndexResponse.json"
    });
    cy.intercept("POST", "/api/auth/sign_in", {
      fixture: "authenticatedUserResponse.json"
    });
    cy.intercept("GET", "/api/auth/validate_token", {
      fixture: "authenticatedUserResponse.json",
      headers: { uid: "johnskoglung@test.com", token: "123456789" }
    });
    cy.visit("/");
    cy.get("[data-cy=sign-up-btn]").click();
    cy.get("[data-cy=user-name-input]").type("john");
    cy.get("[data-cy=email-field]").type("johnskoglung@test.com");
    cy.get("[data-cy=password-field]").type("password");
    cy.get("[data-cy=conf-password-input]").type("password");
  });

  it("is expected to dispaly registration success message", () => {
    cy.get("[data-cy=flash-message]").should(
      "You successfully created an account"
    );
  });

  it("is expected to be redirected to login page", () => {
    cy.url().should("contain", "/login");
  });
});
