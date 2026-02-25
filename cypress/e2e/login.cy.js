describe('Login', () => {
  beforeEach(() => {
     //Arrange
    cy.visit('/')
    cy.screenshot('apos-visitar-a-pagina')
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    //Act
    cy.fazerloginComCredenciasValidas()   
    
    //Assert
    cy.get('#logo-container').should('be.visible').contains('Banco')
    cy.contains('h4', 'Realizar Transferência').should('be.visible')    
  })

  it('Login com dados inválidos deve exibir mensagem de erro', () => {  
    //Act
    cy.fazerloginComCredenciasInvalidas()
    
    //Assert
   cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  })
})