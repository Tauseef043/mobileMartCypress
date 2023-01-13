import HomePageOB from "../e2e/pageObjects/HomePageOB.js";
const HomeOB = new HomePageOB();
var titleTxt;

Cypress.Commands.add("VALIDATE_TITLE", (WebElement, element) => {
  WebElement.contains(element).scrollIntoView().should("be.visible");
});
Cypress.Commands.add("VALIDATE_TITLES",(WebElement)=>{
  WebElement.each(($btn,index) =>{
    cy.wrap($btn).then(function(element){
      titleTxt=
      // cy.log(titleTxt)
      expect(element.text()).to.be.exist
    })
  })
})
Cypress.Commands.add("VALIDATE_BUTTON_CLICK", (pageURL) => {
  cy.url().should("contain", pageURL);
});
//BEST SELLER
Cypress.Commands.add("VALIDATE_ADD_TO_WISHLISTS_BTN", (webElement) => {
  webElement.each(($btn, index) => {
    if (index == 1) {
      cy.wrap($btn).invoke("show").click({ force: true });
      cy.contains("Close").should("be.visible").click();
    }
  });
});

Cypress.Commands.add("VALIDATE_VIEW__WISHLIST_BTN", (webElement, element) => {
  webElement.each(($btn, index) => {
    if (index == 1) {
      cy.wrap($btn).invoke("show").click({ force: true });
      cy.contains("View Wishlist").should("be.visible").click();
      cy.title().should("eq", element);
      cy.go("back");
    }
  });
});
Cypress.Commands.add("VALIDATE_PRODUCT_RATINGS", (WebElement) => {
  WebElement.each(($btn,index)=>{
    cy.wrap($btn).should('exist')
  })
  
});



Cypress.Commands.add("addToWishListBtn", (element) => {
  HomeOB.get_bestSellerProductCard_QuickView_AddToWishListBtn().click();
  cy.contains("Close").should("be.visible").click();
});
Cypress.Commands.add("clickAction", (element) => {
  element.click();
});
