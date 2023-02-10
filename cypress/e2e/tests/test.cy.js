// Test file: bacola-landing-page.spec.js

// Import the Cypress library
import cy from 'cypress'

// Import the page object file
import BacolaLandingPage from './bacola-landing-page'

describe('Bacola Landing Page', () => {
  beforeEach(() => {
    // Visit the landing page
    cy.visit('https://klbtheme.com/bacola')
  })

  it('should have the correct title', () => {
    cy.title().should('eq', 'Bacola - Responsive WooCommerce Theme')
  })

  it('should have the correct header text', () => {
    BacolaLandingPage.header().should('have.text', 'Bacola')
  })

  it('should have the correct subheader text', () => {
    BacolaLandingPage.subheader().should('have.text', 'Responsive WooCommerce Theme')
  })

  it('should have a functional navigation bar', () => {
    BacolaLandingPage.navbar().should('be.visible')
    BacolaLandingPage.navbar().find('a').should('have.length', 4)
    BacolaLandingPage.navbar().find('a').eq(0).should('have.text', 'Home')
    BacolaLandingPage.navbar().find('a').eq(1).should('have.text', 'About')
    BacolaLandingPage.navbar().find('a').eq(2).should('have.text', 'Features')
    BacolaLandingPage.navbar().find('a').eq(3).should('have.text', 'Contact')
  })

  it('should have a functional "Learn More" button', () => {
    BacolaLandingPage.learnMoreButton().should('be.visible')
    BacolaLandingPage.learnMoreButton().should('have.text', 'Learn More')
    BacolaLandingPage.learnMoreButton().click()
    cy.url().should('eq', 'https://klbtheme.com/bacola/about')
  })

  it('should have a functional "View Demos" button', () => {
    BacolaLandingPage.viewDemosButton().should('be.visible')
    BacolaLandingPage.viewDemosButton().should('have.text', 'View Demos')
    BacolaLandingPage.viewDemosButton().click()
    cy.url().should('eq', 'https://klbtheme.com/bacola/demos')
  })

  it('should have a functional "Get Bacola" button', () => {
    BacolaLandingPage.getBacolaButton().should('be.visible')
    BacolaLandingPage.getBacolaButton().should('have.text', 'Get Bacola')
    BacolaLandingPage.getBacolaButton().click()
    cy.url().should('eq', 'https://klbtheme.com/bacola/purchase')
  })
})
