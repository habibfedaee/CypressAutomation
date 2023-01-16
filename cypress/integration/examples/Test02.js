/// <reference types= "Cypress" />

const { groupBy } = require("cypress/types/lodash");

describe("My first Test suite", function () {
  it("my first test case", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    // to type into the following field
    cy.get(".search-keyword").type("ca");
    // add wait
    cy.wait("2000");
    // selenium get hit url in browser, cypress get acts like findElement of selenium
    cy.get(".product").should("have.length", 5);
  });
});
