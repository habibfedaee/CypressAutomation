/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import "cypress-iframe";

describe("Frame Test", function () {
  it("iframe demo example", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // load the frame:
    cy.frameLoaded("#courses-iframe");

    // switch to iframe by:

    cy.iframe().find("a[href*='mentorship']").eq(0).click();
    // assert if there is two courses:

    cy.wait(5000);
    cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2); //
  });
});
