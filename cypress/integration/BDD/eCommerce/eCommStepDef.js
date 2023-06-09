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
});

//Then  select the country and submit and verify thank you message
Then("select the country and submit and verify thank you message", function () {
  // select the country and submit and verify thank you message:
  // --------------YOU NEED TO FINISH TO PAGE OBJECTS for THIS-------------
});
