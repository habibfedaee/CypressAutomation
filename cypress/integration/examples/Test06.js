/// <reference types="Cypress" />

describe("mouse hover action", function () {
  it("implementing mouse-hover on Mouse-Hover button", function () {
    // in cypress mouse-over action is not supported, due to issues with the mouse-over action
    // usually mouse-over action comes with issues like not being able to locate and correctly click on an item
    // that's why cypress guys choose not to add mouse-over, rather use the jquery method show() to show an item

    cy.visit("https://rahulshettyacademy.com/AutomationPractice");
    // use jquery show method to show underlying element under the main element that needs mouse-hover
    cy.get(".mouse-hover-content").invoke("show");
    // get underlying element by its locator
    cy.contains("Top").click();
    // assert if url if includes '#top'
    cy.url().should("include", "#top");
  }); // end of it
}); // end of desc
