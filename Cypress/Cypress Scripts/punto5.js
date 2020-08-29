context('Login Tests', () => {

  it('register a new daily task', () => {
      cy.visit('https://habitica.com/static/home')
      cy.get('.login-button').click();

      cy.get('#usernameInput').type('pa_test').should('have.value', 'pa_test');
      cy.get('#passwordInput').type('fake@email.com');

      cy.get('.btn-info[type="submit"]').click()

      cy.get('.daily > .tasks-list > .quick-add').type('Tarea Diaria');

      cy.get('.daily > .tasks-list > .quick-add').type('{enter}')

      cy.get('.btn-info[type="submit"]').click()
    })
});