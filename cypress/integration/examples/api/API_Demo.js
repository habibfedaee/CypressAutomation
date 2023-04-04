describe("api testing", function () {
  it("GET", function () {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/get",
    }).then(function (response) {
      expect(response.body).have.property("url");
    });
  });

  // post request
  it("Post Request", function () {
    cy.request({
      method: "POST",
      url: "https://httpbin.org/post",
      headers: {
        "content-type": "application/json",
      },
      body: {
        name: "habib",
        age: 21,
      },
    }).then((response) => {
      expect(response.body).to.have.property("json");
      expect(response.body.json).to.deep.equal({ name: "habib", age: 21 });
    });
  });

  // put request
  it("Put request", function () {
    cy.request("PUT", "https://httpbin.org/put", {
      name: "habib",
      age: 21,
    }).then((response) => {
      expect(response.body).to.have.property("json");
      expect(response.body.json).to.deep.equal({ name: "habib", age: 21 });
    });
  });

  // patch request
  it("Patch request", function () {
    cy.request("PATCH", "https://httpbin.org/patch", {
      name: "habib",
      age: 21,
    }).then((response) => {
      expect(response.body).to.have.property("json");
      expect(response.body.json).to.deep.equal({ name: "habib", age: 21 });
    });
  });
});
