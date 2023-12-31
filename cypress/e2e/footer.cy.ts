describe("footer", () => {
  it("should display content on the footer section", () => {
    cy.visit("/");
    cy.get("p").should("exist");
    cy.get("h1").contains("Featured Products");
  });
});
