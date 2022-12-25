/// <reference types="Cypress" />

describe("My Second Test Suite", function () {
  it("My FirstTest case", function () {
    cy.visit("https://klbtheme.com/bacola/");

    // cy.get('.subscribe-input').type("asd").scrollIntoView()
    cy.contains('NEW PRODUCTS').should('')
   
  });

  //fixture
});
