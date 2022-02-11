describe("User can add ingredients when creating a recipe", () => {
  before(() => {
    cy.intercept("GET", "api/recipes", {
      fixture: "ingredientsIndexResponse.json",
    });
    cy.visitAndAuthenticate();
  });
  describe("Navigates to create recipe form and add ingredients", () => {
    before(() => {
      cy.get("[data-cy=my-recipes]").click();
      cy.get("[data-cy=create-recipe]").click();
      cy.get("[data-cy=add-ingredient-line]").click();
    });

    describe("is expected to show a new line of ingredients fields", () => {
      it("is expected to show a ingredient name dropdown", () => {
        cy.get("[data-cy=ingredient-name-1]").within(() => {
          cy.get("[data-cy=unit-input-1")
          cy.get("[data-cy=amount-input-1")
        })
      });
    });
  });
});
