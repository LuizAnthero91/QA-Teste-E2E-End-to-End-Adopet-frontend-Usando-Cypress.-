describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/todo')
    })
  
    it('Adiciona novos itens na lista', () => {
        const novoItem = 'Alimentar o gato'
        cy.get('[data-test=new-todo]').type(`${novoItem}{enter}`)
    })
  })