describe('Transferências', () => {      
    beforeEach(() => {
        cy.visit('/')
        cy.fazerloginComCredenciasValidas() 
    })
           
    it('Deve transferir quando informo dados e valor válidos', () => {
        //Act
        cy.realizarTransferencias('Maria Oliveira', 'João da Silva', '10.00')
        
        //Assert       
        cy.verificarMensagemNoToast('Transferência realizada!')    
    })

    it('Deve apresentar erro quando tentar transferir mais que 5 mil sem o token', () => {
        //Act
        cy.realizarTransferencias('João da Silva', 'Maria Oliveir', '5000.01')
       
        //Assert        
        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')    
    })
})