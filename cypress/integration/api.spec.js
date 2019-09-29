/// <reference types="Cypress" />

// const getStore = () => cy.window().its('$store')



describe('API', () => { 
    it('Loading products from API and update UI', () => {
      cy.server()
      cy.route('GET', '/src/actions/api/loadProducts')
      cy.visit('http://localhost:3000/#/products').then(() => {
        cy.get('.product')        
        .should('have.length', 17)
      })   
    })

    it('has expected state of 17 items on load Products', () => {     
      cy.window().its('store').invoke('getState').its('api.products').should('have.length', 17)         
      })
  })