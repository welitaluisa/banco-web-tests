describe('Login', () => {
  it('Login com dados válidos deve permitir entrada no sistema', () => {

    //Arrange
    cy.visit('http://localhost:4000')

    //Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.get('#logo-container').should('be.visible').contains('Banco')
    cy.contains('h4', 'Realizar Transferência').should('be.visible')   
   
  })

    it('Login com dados inválidos deve exibir mensagem de erro', () => {

    //Arrange
    cy.visit('http://localhost:4000')

    //Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('789999')
    cy.contains('button', 'Entrar').click()
    
    //Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
   
  })
})