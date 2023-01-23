/// <reference types="Cypress" />

describe("My third test suite", function () {
  it("my first test case", function () {
    // checkboxes:
    cy.visit("https://rahulshettyacademy.com/AutomationPractice");

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
  }); // end of it
});
