describe("invalid credentials", () => {
  it("should disallow login when given an incorrect password, and show the user a message", () => {
    cy.visit("/");
    cy.get("#registerEmail").type("invalid@mail.com");
    cy.wait(500);
    cy.get("#registerPassword").type("invalidPassword");
    cy.wait(500);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get("#loginEmail").type("invalid@mail.com");
    cy.wait(500);
    cy.get("#loginPassword").type("invalidPassword{enter}");
    cy.get("#loginEmail:invalid")
      .invoke("prop", "validationMessage")
      .should("include", "Please match the requested format");
  });
});
