/// <reference types="Cypress" />

describe("it opens a url", function () {
  it("opens amazon.com", function () {
    cy.visit("https://amazon.com");
  });
});
