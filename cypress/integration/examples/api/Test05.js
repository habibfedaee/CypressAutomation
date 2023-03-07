/// <reference types = "Cypress" />

// handling child tabs using cypress:
// cypress by itself cannot handle child tabs. But, there is a way to do that.
// Use jquery removeAttribute function to remove target attribute of that link in order to
// open that link in current window/tab.

describe("My fifth test Suite", function () {
  it("working with web tables", function () {
    //cy.visit("https://rahulshettyacademy.com/AutomationPractice");
    cy.visit(Cypress.env("url") + "/AutomationPractice/");

    // get specific web table items by iterating
    cy.get("tr td:nth-child(2)").each(($e1, index, $list) => {
      const text = $e1.text();
      // get specific cell which includes python
      if (text.includes("Python")) {
        // move to the next column value by using jquery next():
        // we can use 'index' value to grab the same row# from the price column
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (price) {
            const priceText = price.text();
            // assert if price taken from ui is == 25
            expect(priceText).to.equal("25");
          });
      }
    });
  }); // end it
}); // end desc
