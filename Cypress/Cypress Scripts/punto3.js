context('Login Tests', () => {

  it('register a new challenge', () => {
      cy.visit('https://habitica.com/static/home')

      cy.get('.login-button').click();

      cy.get('#usernameInput').type('pa_test').should('have.value', 'pa_test');

      cy.get('#passwordInput').type('fake@email.com');

      cy.get('.btn-info[type="submit"]').click()

      cy.get(':nth-child(7) > .nav-link').click()

      cy.get('.header-row > .col-md-4 > .btn').click()

      cy.get('#__BVID__255').type(' Desafio de Prueba')

      cy.get('#__BVID__256').type('DP Test')

      cy.get('.summary-textarea').type('Este es el resumen')

      cy.get('.description-textarea').type("Esta es la descripcion")

      cy.get(':nth-child(5) > .form-control').select('Desafíos públicos')

      cy.get('.category-select').click({ force: true })

      //cy.get('[disabled]').click({force: true})

      cy.get('#challenge-modal-cat-creativity').click({force: true})

      cy.get('.category-box > .btn').click()

      cy.get('.submit-button-wrapper > .btn').click({ force: true })

      
    })
});