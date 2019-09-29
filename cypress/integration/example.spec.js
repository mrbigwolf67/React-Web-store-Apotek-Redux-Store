describe('Example component', () => {
    it('has api button', () => {
        cy.visit('/')
        cy.contains('Call')
    })

    it('can navigate', () => {
        cy.visit('/')
        cy.get('a').click();
        cy.url().should('includes', 'page2');
    })
})