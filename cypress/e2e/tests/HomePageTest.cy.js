/// <reference types="Cypress" />
import { trim } from "cypress/types/lodash/index.js";
import HomePageLeftNav from "../pageObjects/HomePageLeftNavOB.cy.js";

describe('HomePage Test Suit',function(){
  
  const leftNav=new HomePageLeftNav()


  beforeEach(function() {
    cy.viewport(1600, 1200)
   
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
})

    it('Redirecting to url',function(){
      
       cy.visit(Cypress.env('URL'))
        
        cy.url().should('eq','https://klbtheme.com/bacola/')
        cy.title().should('eq','Bacola – Grocery Market and Food Theme – KlbTheme')
    })
    it('banner visiblity',()=>{

        cy.get('#slick-slide00 > .slider-item > .overlay-link').should('be.visible')

      


    })
    it('leftNav Visiblity',function(){
       leftNav.getLeft_fruitAndeg(this.data.fruitNav).should('have.text',' Fruits & Vegetables')
    })

    

})