/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />

import "cypress-iframe";

describe("Frame Test", function () {
  it("iframe demo example", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // load the frame:
    cy.frameLoaded("#courses-iframe");

    // switch to iframe by:

    cy.iframe().find("a[href='mentorship']").eq(0).click();
    // assert if there is two courses:

    cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2); // error: seems that couldn't find the provided selector, or due to reloading issues
  });
});
