/// <reference types="Cypress" />
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
  
    it('left fruit Nav Visiblity',function(){
    leftNav.getLeft_fruitAndeg(this.data.fruitNav).then(function(element){

        const navTitle=element.text();
        expect(navTitle.includes(this.data.fruitNav)).to.be.true

      })

      //  leftNav.getLeft_fruitAndeg(this.data.fruitNav).should('have.text',' Fruits & Vegetables')
    })

    it('left fruit sub Nav Visiblity',function(){
      leftNav.getLeft_fruitAndeg(this.data.fruitNav).invoke('show')
      cy.contains('Cuts & Sprouts').click({force: true} )
      cy.url().should('include','cuts-sprouts')
      
  
      cy.pause()
        //  leftNav.getLeft_fruitAndeg(this.data.fruitNav).should('have.text',' Fruits & Vegetables')
      })


    it('left meat Nav Visiblity',function(){
      leftNav.getLeft_fruitAndeg(this.data.meatNac).then(function(element){
  
          const navTitle=element.text();
          expect(navTitle.includes(this.data.meatNac)).to.be.true
  
        })
      })
      it('left breakfast Nav Visiblity',function(){
        leftNav.getLeft_fruitAndeg(this.data.breakfast).then(function(element){
    
            const navTitle=element.text();
            expect(navTitle.includes(this.data.breakfast)).to.be.true
    
          })
        })

})
