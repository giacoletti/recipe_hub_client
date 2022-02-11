/* eslint-disable no-undef */
describe("Recipe", () => {
  before(() => {
    cy.intercept("GET", "api/recipes", { body: { recipes: [] } });
    cy.intercept("GET", "api/ingredients", {
      fixture: "ingredientsIndexResponse.json"
    });
  });
  describe("can be created by logged in user", () => {
    before(() => {
      cy.intercept("POST", "api/recipes", {
        fixture: "createRecipeResponse.json"
      });
      cy.visitAndAuthenticate();
      cy.get("[data-cy=my-recipes]").click();
      cy.get("[data-cy=create-recipe]").click();
      cy.get("[data-cy=recipe-name]").type("Pancakes");
      cy.get("[data-cy=instructions]").type("Mix them together. Bake");
      cy.get("[data-cy=submit-btn]").click();
    });

    it("is expected to show a success message", () => {
      cy.get("[data-cy=flash-message]")
        .should("contain", "Your recipe has been created");
    });
  });
  describe("can't be created with empty name field", () => {
    before(() => {
      cy.intercept("POST", "api/recipes", {
        fixture: "createWithoutName.json"
      });
      cy.intercept("GET", "api/ingredients", { body: { ingredients: [] } });
      cy.intercept("GET", "api/recipes", { body: { recipes: [] } });
      cy.visitAndAuthenticate();
      cy.get("[data-cy=my-recipes]").click();
      cy.get("[data-cy=create-recipe]").click();
      cy.get("[data-cy=instructions]").type("Mix them together. Bake");
      cy.get("[data-cy=submit-btn]").click();
    });

    it("is expected to see error message", () => {
      cy.get("[data-cy=flash-message]")
        .should("contain", "Name can't be blank");
    });
  });

  describe("user can hide the Recipe create form", () => {
    before(() => {
      cy.get("[data-cy=hide-recipe]").click();
    });

    it("is expected to hide recipe name input field", () => {
      cy.get("[data-cy=recipe-name]").should("not.exist");
    });

    it("is expected to hide recipe instructions input field", () => {
      cy.get("[data-cy=instructions]").should("not.exist");
    });

    it("is expected to hide add another button", () => {
      cy.get("[data-cy=add-ingredient-line]").should("not.exist");
    });

    it("is expected to hide save button", () => {
      cy.get("[data-cy=submit-btn]").should("not.exist");
    });

    it("is expected to show Create Recipe button", () => {
      cy.get("[data-cy=create-recipe]").should("be.visible");
    });
  });
});
