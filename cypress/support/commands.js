// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

import ProductsPage from "../integration/examples/pageObjects/ProductsPage.js";
//import productsPage from "../integration/examples/pageObjects/ProductsPage.js";
Cypress.Commands.add("selectProduct", (productName) => {
  const productsPage = new ProductsPage();
  cy.get("h4.card-title").each(($el, index, $list) => {
    // add item 'blackberry' to the cart:
    const text = $el.text();
    if (text.includes(productName)) {
      //cy.get("button.btn.btn-info").eq(index).click();
      productsPage.getAdd().eq(index).click();
    }
  });
});

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
