class ProductsPage {
  // add all the locators to the products elements

  // checkout btn:
  getCheckoutBTN() {
    return cy.get(".nav-link.btn.btn-primary");
  }

  //
  getProductTitles(num) {
    return cy.get("h4 a(" + num + ")");
  }

  // add to cart btn:
  getAdd() {
    return cy.get("button.btn.btn-info");
  }

  // final checkout btn:

  getFinalCheckout() {
    return cy.get("button[class='btn btn-success']");
  }

  // country input:
  getCountryInput() {
    return cy.get("#country");
  }

  // checkbox:
  getAgreeCheckbox() {
    return cy.get(".checkbox.checkbox-primary > input");
  }

  // purchase button:
  getPurchaseBTN() {
    return cy.get("input[value='Purchase']");
  }

  // success alert:
  getSuccessAlert() {
    //return cy.get("div[class='alert alert-success alert-dismissible'] strong");
    return cy.get(".alert");
  }

  // total from productPage
  getTotalAmount() {
    return cy.get(".text-right h3 strong");
  }

  // total amount of each product ------- NEEDS TO CREATE AN OBJECT THAT RETURNS MULTIPLE AMOUNTS---
  getTotalEachProduct() {
    return cy.get("tr td:nth-child(4) strong"); // returns a webEL; can't be iterated using .each()
  }

  // country input
  getCountry(){
    return cy.get('#country');
  }
  
  getAgreeCheckbox(){
    return cy.get('#checkbox2');
  }

  getPurchaseButton(){
    return cy.get("input[value='Purchase']")
  }

  getSuccessMessage(){
    return cy.get("div[class='alert alert-success alert-dismissible'] strong");
  }
}

export default ProductsPage;
