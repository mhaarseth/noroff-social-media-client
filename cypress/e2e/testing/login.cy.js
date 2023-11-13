describe("login", () => {
  it("should disallow login with valid credentials", () => {
    cy.visit("/");
    cy.get("button[data-auth='login']").click();
    cy.get("#loginEmail").type("invalid@mail.com");
    cy.get("#loginPassword").type("invalidPassword");
    cy.get("button[data-auth='login']").click();
    cy.get("#errorMessage").should("be.visible");
  });
});
