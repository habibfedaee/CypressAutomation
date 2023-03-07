/// <reference types="Cypress" />

describe("My second test suite", function () {
  it("my first test case", function () {
    //cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.visit(Cypress.env("url") + "/seleniumPractise/");
    cy.wait(3000);
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    // cy.get like drive.findElement in selenium
    // parent child chaining:
    cy.get(".products").as("productLocator");
    cy.get("@productLocator")
      .find(".product")
      .each(($e1, index, list) => {
        const textVeg = $e1.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          $e1.find("button").click();
        }
      });
    cy.get(".cart-icon > img").click();
  });
});
