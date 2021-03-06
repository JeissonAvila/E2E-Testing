context('Login Tests', () => {

  it('makes a succesful login ', () => {
      cy.visit('https://habitica.com/static/home')
      cy.get('.login-button').click();

      cy.get('#usernameInput').type('pa_test').should('have.value', 'pa_test');
      cy.get('#passwordInput').type('fake@email.com');

      cy.get('.btn-info[type="submit"]').click()
    })
});