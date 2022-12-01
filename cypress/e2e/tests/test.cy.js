/// <reference types="Cypress" />

describe('My Second Test Suite', function() 
{

it('My FirstTest case',function() {


cy.visit("https://rahulshettyacademy.com/AutomationPractice/")


//mouse hover

cy.get('.mouse-hover-content').invoke('show')
cy.contains('Top').click()
cy.url().should('include','top')

// ye chez cypress me withoyt hover kiye force click se bhandle ki ja sktu hai
// cy.contains('Top').click({force: true})
// cy.url().should('include','top')

})



//fixture

}  )



