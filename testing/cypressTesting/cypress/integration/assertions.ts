it('learning assertionss', function (){


    cy.visit('https://example.cypress.io/')
    cy.contains('get').click()
    
    cy.get('#query-btn').should('contain','Button')
})