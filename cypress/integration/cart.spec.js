/// <reference types="Cypress" />
import { removeItemFromLocalStorage, clearLocalStorage } from '../../src/actions/cartActions'

describe('Cart on start', () => {
    it('has expected state of 0 items on load CartPage', () => {
      cy.server()     
      cy.visit('http://localhost:3000/#/cartPage')

      cy.get('.article')
      .should('have.length', 0)
    })
  }) 

  describe('Cart - load Cart and set State with 3 items', () => {
    beforeEach(() => {
      cy.setLocalstorage()
      cy.visit('http://localhost:3000/#/cartPage')             
    })
  
    it('has expected state of 3 items on load CartPage', () => {     
      cy.window().its('store').invoke('getState').its('cart.cart').should('have.length', 3)         
      })

    it('has expected state of 2 items after remove one item from Cart', () => {
      cy.window().its('store').invoke('dispatch', removeItemFromLocalStorage(2))
      cy.window().its('store').invoke('getState').its('cart.cart').should('have.length', 2) 
    })

    it('has expected state of null after clear Cart', () => {
      cy.window().its('store').invoke('dispatch', clearLocalStorage())
      cy.window().its('store').invoke('getState').its('cart.cart').should('be.equal', null) 
    })      
  })     
    