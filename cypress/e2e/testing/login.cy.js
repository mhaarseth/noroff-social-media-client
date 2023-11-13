describe("login", () => {
  it("should disallow login with invalid credentials, and show the user a message", () => {
    cy.wait(500);
    cy.visit("/");
    cy.get("#registerEmail").type("invalid@mail.com");
    cy.wait(500);
    cy.get("#registerPassword").type("invalidPassword");
    cy.wait(500);
    cy.get("#registerModal").contains("Login").click();
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type("noroff@stud.noroff.no");
    cy.wait(500);
    cy.get("#loginPassword").type("invalidPassword{enter}");
    cy.wait(500);
    cy.on("window:alert", (str) => {
      expect(str).to.include(
        "Either your username was not found or your password is incorrect",
      );
    });
    cy.wait(500);
    cy.reload();
    cy.get("#registerEmail").type("invalid@mail.com");
    cy.wait(500);
    cy.get("#registerPassword").type("invalidPassword");
    cy.wait(500);
    cy.get('button[data-auth="login"]').first().click({ force: true });
    cy.wait(500);
    cy.get("#loginEmail").type("invalid@mail.com");
    cy.wait(500);
    cy.get("#loginPassword").type("invalidPassword{enter}");
    cy.get("#loginEmail:invalid")
      .invoke("prop", "validationMessage")
      .should("include", "Please match the requested format");
    cy.reload();
    cy.get("#registerEmail").type("endtoendtest@noroff.no");
    cy.wait(500);
    cy.get("#registerPassword").type("Password1234{enter}");
    cy.wait(500);
    cy.get('button[data-auth="login"]').eq(1).click({ force: true });
    cy.wait(500);
    cy.get("#loginEmail").type("endtoendtest@noroff.no");
    cy.wait(500);
    cy.get("#loginPassword").type("Password1234{enter}");
    cy.url().should("include", "?view=profile&name=");
    cy.get('button[data-auth="logout"]').click();
    cy.get("#registerForm").should("be.visible");
  });
});
