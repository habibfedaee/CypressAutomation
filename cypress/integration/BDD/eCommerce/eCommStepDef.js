import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../examples/PageObjects/HomePage";
import ProductsPage from "../../examples/pageObjects/ProductsPage";

const homePage = new HomePage();
const productsPage = new ProductsPage();

Given("I open ECommerce page", function () {
  // write your test code here:
  cy.visit(Cypress.env("url") + "/angularpractice/");
});

When("I add items to the cart", function () {
  homePage.getShop().click();
  this.data.productName.array.forEach((element) => {
    cy.selectProduct(element);
  });
  productsPage.getFinalCheckout().click();
});

//And validate the total prices
And("validate the total prices", function () {
  // code for validation of the prices
  // ------------------YOU NEED TO FINISH PAGE OBJECTS FOR THIS TASK --------------
  var grandTotal=0;

      cy.get("tr td:nth-child(4) strong")
        .each(($el, index, $list) => {
          const amount = $el.text();
          var res = amount.split(" ");
          res = res[1].trim();
          grandTotal = Number(grandTotal) + Number(res);
          cy.log(res);
        })
        .then(() => {
          cy.log(grandTotal);
          // assert if var total is equal to total from productsPage
          productPage.getTotalAmount().then((element) => {
            var totalItems = element.text();
            var result = totalItems.split(" ");
            totalItems = result[1].trim();
            expect(Number(totalItems)).to.be.equal(Number(grandTotal));
          });
        });
});

//Then  select the country and submit and verify thank you message
Then("select the country and submit and verify thank you message", function () {
  // select the country and submit and verify thank you message:
  
  cy.fixture("example").as("user_data");
  cy.get("@user_data").then((user_data)=>{
    productsPage.getCountry.type(user_data.country);
  })
  productsPage.getAgreeCheckbox.click();
  productsPage.getPurchaseButton.click();

  // verify thank you message:
  expect(productsPage.getSuccessMessage).to.be.visible();

});
