/// <reference types="cypress" />

describe("working with child window", function () {
  it("opens a new window", function () {
    // two way to open a new window:
    // 1st: by using remove target attribute method
    // 2nd: by grabbing href attribute and using cy.visit() after previous steps

    cy.visit("https://rahulshettyacademy.com/AutomationPratice/");
    // to grab an attribute of an element we can use jquery prop() method as following: but
    // cypress will NOT allow us to open another unique domain separate from our current domain
    // --WON'T WORK--, so the link should be a sub domain of the current domain that we are working on.
    cy.get("#opentab").then(function (el) {
      const url = el.prop("href");
      cy.visit(url);
    });
  });
});
