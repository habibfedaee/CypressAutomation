describe("api testing", function () {
  it("get", function () {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/get",
    }).then(function (response) {
      expect(response.body).to.have("url");
    });
  });
});
