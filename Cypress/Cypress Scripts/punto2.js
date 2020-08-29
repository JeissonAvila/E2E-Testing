context('Login Tests', () => {

  it('makes a wrong sign up attemp', () => {
      cy.visit('https://habitica.com/static/home')
      cy.get('input[placeholder="Username"]').type('pa_test')
      cy.get('[type="email"]').type('onassottuse-0220@yopmail.com')
      cy.get('[placeholder="Contraseña"]').type('fake@email.com')      
      cy.get('[placeholder="Confirma contraseña"]').type('fake@email.com')
        
      


    })
});