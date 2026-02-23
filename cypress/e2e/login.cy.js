describe('Login', () => {
  beforeEach(() => {
     //Arrange
    cy.visit('/')
    cy.screenshot('apos-visitar-a-pagina')
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {

    //Act
    cy.fixture('credenciais').then((credenciais) => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })
     
    cy.contains('button', 'Entrar').click()
    cy.screenshot('apos-clicar-em-entrar')

    //Assert
    cy.get('#logo-container').should('be.visible').contains('Banco')
    cy.contains('h4', 'Realizar Transferência').should('be.visible')   
   
  })

    it('Login com dados inválidos deve exibir mensagem de erro', () => {
  
    //Act
    cy.fixture('credenciais').then((credenciais) => {
       cy.get('#username').click().type(credenciais.invalida.usuario)
       cy.get('#senha').click().type(credenciais.invalida.senha)
    })
      
    cy.contains('button', 'Entrar').click()
    
    //Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
   
  })
})