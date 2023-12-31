describe("Hero section", () => {
  it("should display home page and hero title", () => {
    cy.visit("/");

    cy.get('[data-testId="hero-title" ]')
      .should("exist")
      .should("have.text", "Comfort");
  });
  it("should display details content on the hero section", () => {
    cy.visit("/");
    cy.get("p")
      .contains(
        "See our thoughtfully curated collection of Furniture, lighting, and Objects",
      )
      .should("exist");
  });
});
