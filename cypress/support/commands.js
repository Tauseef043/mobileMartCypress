// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Define in your `support/commands.js`

//mouse invoke hover
Cypress.Commands.add('hoverr', (element,clickElement) => {
    cy.get(element).invoke('show');
    cy.contains(clickElement).click({force: true} )
    
});
//mouse hover
Cypress.Commands.add('mouseAction', (element) => {
    cy.get(element).invoke('show');
    cy.contains(element).click({force: true} )
    
});

// Later in your tests you can call:


Cypress.Commands.add('Mouse Hover', (hoverr) => { 

    cy.get('h4.card-title').each(($el,index,$title)=>{


        if($el.text().includes(hoverr)){
     
             cy.get('button.btn.btn-info').eq(index).click()
     
        }
     })

})
