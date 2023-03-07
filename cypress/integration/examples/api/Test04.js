/// <reference types="Cypress" />

// const cypress = require("cypress");

describe("My third test suite", function () {
  it("handle alerts in web app", function () {
    // checkboxes:
    //cy.visit("https://rahulshettyacademy.com/AutomationPractice");
    cy.visit(Cypress.env("url") + "/AutomationPractice/");

    // alerts
    cy.get("#alertbtn").click();
    cy.get('[value="Confirm"]').click();

    // window:alert
    cy.on("window:alert", (str) => {
      // Mocha
      expect(str).to.be.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });

    // window:confirm
    cy.on("window:confirm", (str) => {
      // Mocha
      expect(str).to.be.equal("Hello , Are you sure you want to confirm?");
    });

    // handling child tabs using cypress:
    // cypress by itself cannot handle child tabs. But, there is a way to do that.
    // Use jquery removeAttribute function to remove target attribute of that link in order to
    // open that link in current window/tab.
    cy.get("#opentab").invoke("removeAttr", "target").click();

    // for navigation use 'cypress.go(direction)'
    // direction : back, forward

    cy.url().should("include", "rahulshettyacademy");
    cy.go("back");

    // for validation where we are currently, we can use 'cy.url()'
  }); // end of it
});
