
import HomePageOB from "../e2e/pageObjects/HomePageOB.js";
const HomeOB = new HomePageOB();
Cypress.Commands.add("addToWishListBtn", (element) => {
   

  HomeOB.get_bestSellerProductCard_QuickView_AddToWishListBtn().click();
   cy.contains("Close").should("be.visible").click();
});
Cypress.Commands.add("clickAction",(element)=>{
    element.click()
})


