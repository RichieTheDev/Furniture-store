describe("about page", () => {
  it("should display content on the about page", () => {
    cy.visit("/about");
    cy.get('[data-testId="about-title"]')
      .should("exist")
      .should("have.text", "About Us");
    cy.get("p").should("exist");
    cy.get("h1").should("exist");
  });

  it("should display header", () => {
    cy.visit("/about");
    cy.get('[data-testid="header"]')
      .should("exist")
      .should("have.text", "Exceptional Savoir");
  });
  it("should display details content on the about page", () => {
    cy.visit("/about");
    cy.get("h1").contains("Attention To The Details").should("exist");
    cy.get("p")
      .contains("Durability and Feasibility are important aspects")
      .should("exist");
  });
});
