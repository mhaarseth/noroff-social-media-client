describe("incorrect password", () => {
  it("should disallow login when given an incorrect password, and show the user a message", () => {
    cy.visit("/");
    cy.get("#registerEmail").type("endtoendtest@noroff.no");
    cy.wait(500);
    cy.get("#registerPassword").type("incorrectPassword{enter}");
    cy.wait(500);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get("#loginEmail").type("endtoendtest@stud.noroff.no");
    cy.wait(500);
    cy.get("#loginPassword").type("incorrectPassword{enter}");
    cy.wait(500);
    cy.on("window:alert", (str) => {
      expect(str).to.include(
        "Either your username was not found or your password is incorrect",
      );
    });
  });
});
