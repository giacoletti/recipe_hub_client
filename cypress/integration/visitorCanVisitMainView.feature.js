/* eslint-disable no-undef */
describe("Visitor can visit the home page.", () => {
  before(() => {
    cy.visit("/");
  });

  it('is expected to see "Recipe Hub"', () => {
    cy.get("[data-cy=title]").should("contain.text", "Recipe Hub");
  });
});
