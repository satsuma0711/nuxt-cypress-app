describe('test register page', () => {
  it('should register', () => {
    cy.visit('/register/')
    cy.get('[data-cy=name]').type('John')
    cy.get('[data-cy=birthday-text-field]').click()
    const datePicker = cy.get('[data-cy=birthday-date-picker]')
    for (let i = 0; i < 18; i++) {
      datePicker.get('[aria-label="Previous month"]').click()
    }
    cy.get('[data-cy=birthday-date-picker]').within(() => {
      cy.wait(1000)
      cy.get('div').contains('8').click()
    })

    cy.get('[data-cy=sex-female]').parent().click()
    cy.get('[data-cy=agreed-with-eula]').parent().click()
    cy.wait(1000)
    cy.get('[data-cy=next-btn]').click()
    cy.wait(1000)

    cy.contains(
      'Your registration is complete.'
    ).should('exist')
  })
})
