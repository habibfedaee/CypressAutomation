class HomePage {
  // name field
  getName() {
    return cy.get(":nth-child(1) > .form-control");
  }

  // email
  getEmail() {
    return cy.get(":nth-child(2) > .form-control");
  }

  // password
  getPassword() {
    return cy.get("#exampleInputPassword1");
  }

  // employement status
  getEmployementStatusStudent() {
    return cy.get("#inlineRadio1");
  }
  getEmployementStatusEmployed() {
    return cy.get("#inlineRadio2");
  }

  getEmployementStatusEntrepreneur() {
    return cy.get("#inlineRadio3");
  }

  // date of birth
  getDateOfBirth() {
    return cy.get("cy.get(':nth-child(8) > .form-control')");
  }

  getTwoWayDataBinding() {
    return cy.get('input[name="name"]:nth-child(1)');
  }

  getGender() {
    return cy.get("select");
  }

  getEntrepreneur() {
    return cy.get("#radioButton3");
  }

  getShop() {
    return cy.get(":nth-child(2) > .nav-link");
  }
}

export default HomePage;
