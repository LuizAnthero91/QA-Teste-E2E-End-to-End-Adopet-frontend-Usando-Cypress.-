describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
        cy.get('[data-test="login-button"]').click();

    }) 

    it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
      
      cy.login('ana@email.com','Senha123')  
      

    })
  })
