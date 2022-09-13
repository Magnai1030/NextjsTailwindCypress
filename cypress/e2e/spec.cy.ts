describe("empty spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get("h1").contains("BATMAGNAI");

    // The new page should contain an h1 with "About page"
  });
});
