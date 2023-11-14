describe("logging in, then logging out", () => {
  it("should allow the user to login, then allow the user to logout using the logout button", () => {
    cy.visit("/");
    cy.get("#registerEmail").type("endtoendtest@noroff.no");
    cy.wait(500);
    cy.get("#registerPassword").type("Password1234{enter}");
    cy.wait(500);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get("#loginEmail").type("endtoendtest@noroff.no");
    cy.wait(500);
    cy.get("#loginPassword").type("Password1234{enter}");
    cy.url().should("include", "?view=profile&name=");
    cy.get('button[data-auth="logout"]').click();
    cy.get("#registerForm").should("be.visible");
  });
});
