//./node_modules/.bin/cypress run --browser chrome --headed --spec cypress/integration/test_contact_us.spec.js

describe('test testTEEEEEST', () => {
  it('should open page', () => {
    cy.visit('https://www.automationteststore.com/');

    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
    cy.title().should('include', 'A place to practice your automation skills!');
    cy.url().should('include', 'automationteststore');

    cy.get('.info_links_footer > :nth-child(5) > a').click({ forse: true });

    cy.get('.pull-left address').contains('123 Main Street');
    // cy.get('.pull-left address').should('have.text', 'Kensington');
  });
});
