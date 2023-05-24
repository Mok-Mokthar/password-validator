describe("password verif", () => {
  it("Password verification", () => {
      cy.visit("http://localhost:5174");

      cy.get("#password").type('azerty');
      cy.get("#button").click();
      cy.get("#title").contains("Le mot de passe doit comporter au moins 8 caractères");

      cy.get("#password").clear().type('azertyuiop');
      cy.get("#button").click();
      cy.get("#title2").contains("Le mot de passe doit contenir au moins 2 chiffres");

      cy.get("#password").clear().type('azertyuiop18');
      cy.get("#button").click();
      cy.get("#title3").contains("Le mot de passe doit contenir au moins une lettre majuscule");

      cy.get("#password").clear().type('Azertyuiop18');
      cy.get("#button").click();
      cy.get("#title4").contains("Le mot de passe doit contenir au moins un caractère spécial");
  });
});