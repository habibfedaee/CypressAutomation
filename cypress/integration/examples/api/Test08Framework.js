/// <reference types="Cypress"/>
import HomePage from "../pageObjects/HomePage.js";
import ProductsPage from "../pageObjects/ProductsPage.js";

require("@cypress/xpath");

describe("Testing Framework", function () {
  let data;

  before(function () {
    // it runs before one time before all tests
    cy.fixture("example").as("user_data");
  });

  // for manual data entry:
  // const name = "maria";
  // const email = "maria123@email.com";
  // const password = "Testing123";

  it("my first test case", () => {
    // create objects of the POM pages created
    const homePage = new HomePage();
    const productPage = new ProductsPage();

    cy.visit(Cypress.env("url") + "/angularpractice/");
    //cy.visit("https://rahulshettyacademy.com/angularpractice/");
    // enter name: (using external data)

    cy.get("@user_data").then((user_data) => {
      // type name using pom+locator:
      homePage.getName().type(user_data.name);

      // type email :
      homePage.getEmail().type(user_data.email);

      // enter password:
      homePage.getPassword().type(user_data.password);

      // select female gender:
      homePage.getGender().select(user_data.gender);

      // select employment type:
      if (user_data.job !== "student") {
        homePage.getEmployementStatusEmployed().click();
      } else {
        homePage.getEmployementStatusStudent().click();
      }

      // date of birth: later,

      // verify if minLength attribute is present in the name tag
      homePage.getTwoWayDataBinding().should("have.value", user_data.name);
      homePage.getName().should("have.attr", "minLength", "2");

      // check if 'entrepeneur' radio btn is disabled
      homePage.getEmployementStatusEntrepreneur().should("be.disabled");

      // click on shop
      homePage.getShop().click();
      //cy.get(":nth-child(2) > .nav-link").click();

      // add items to the cart:
      user_data.productName.forEach(function (element) {
        cy.selectProduct(element);
      });

      // click on checkout btn:
      productPage.getCheckoutBTN().click();

      // assert if the total of items' prices matches with the total given

      var total = 0;
      cy.get("tr td:nth-child(4) strong")
        .each(($el, index, $list) => {
          const amount = $el.text();

          var res = amount.split(" ");
          res = res[1].trim();
          total = Number(total) + Number(res);
          cy.log(res);
        })
        .then(() => {
          cy.log(total);
          // assert if var total is equal to total from productsPage
          productPage.getTotalAmount().then((element) => {
            var totalItems = element.text();
            var result = totalItems.split(" ");
            totalItems = result[1].trim();
            expect(Number(totalItems)).to.be.equal(total);
          });
        });

      // enter country name into
      productPage.getFinalCheckout().click();
      productPage.getCountryInput().type(user_data.country);

      // click on agree checkbox:
      productPage.getAgreeCheckbox().click({ force: true });

      // click on purchase btn
      productPage.getPurchaseBTN().click();
    });

    // assert if success alert is present and includes value = 'Success'
    //productPage.getSuccessAlert().should("be.visible");

    productPage.getSuccessAlert().then((element) => {
      const actualText = element.text();
      expect(actualText.includes("Success")).to.be.true;
    });
  }); // end of it
}); // end of desc
