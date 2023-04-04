describe("api testing", function () {
  it("get", () => {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/get",
    }).then((response) => {
      expect(response.body).to.have.property("url");
    });
  });
});
