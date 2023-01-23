/// <reference types="Cypress" />

describe("it opens a url", function () {
  it("opens amazon.com", function () {
    //cy.visit("https://amazon.com");
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);

    // selenium get hit url in browser, cypress get acts like findElement of selenium
    cy.get(".product").should("have.length", 5);
    cy.get(".product:visible").should("have.length", 4);

    // parent child chaining:
    cy.get(".products").as("productLocator");
    cy.get("@productLocator").find(".product").should("have.length", 4);
    cy.get(":nth-child(3) > .product-action > button").click();
    cy.get("@productLocator")
      .find(".product")
      .eq(2)
      .contains("ADD TO CART")
      .click()
      .then(function () {
        cy.log("sf");
      });

    cy.get("@productLocator")
      .find(".product")
      .each(($e1, index, list) => {
        const textVeg = $e1.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          $e1.find("button").click();
        }
      });

    // assert if text logo is displayed correctly
    cy.get(".brand").should("have.text", "GREENKART");

    // this is to print in logs
    cy.get(".brand").then(function (logoelement) {
      cy.log(logoelement.text());
    });

    // const logo = cy.get('.brand');
    // cy.log(cy.get('.brand').text());
    // cy.log(logo.text());

    // fixture
  });
});
