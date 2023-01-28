import HomePageOB from "../e2e/pageObjects/HomePageOB.js";
const HomeOB = new HomePageOB();
var titleTxt,
  i = 0;
  Cypress.Commands.add("VALIDATE_URL", (pageURL) => {

    cy.url().should("contain", pageURL);
  });
  
  Cypress.Commands.add("VALIDATE_BUTTON_CLICK", (pageURL) => {

    cy.url().should("contain", pageURL);
  });
  
Cypress.Commands.add("VALIDATE_BUTTON_VISIBLITY",function(WebElement,element){
  WebElement.should('be.visible')
  WebElement.should('contain.text', element)
  
  
  // expect(WebElement).to.be.visible
  // WebElement.then(function(txt){
  //   expect(txt.text()).to.be.visible
  // })

})

Cypress.Commands.add("VALIDATE_TITLE", (WebElement, element) => {
  WebElement.contains(element)
    .scrollIntoView()
    .should("be.visible")
   
    .then(function (el) {
      cy.log(el.text())
   
      expect(el.text().toUpperCase()).contains(element.toUpperCase());
    });
});
Cypress.Commands.add("VALIDATE_TITLES", (WebElement) => {
  WebElement.each(($btn, index) => {
    cy.wrap($btn).then(function (element) {
      // cy.log(titleTxt)
      expect(element.text()).to.be.exist;
    });
  });
});
Cypress.Commands.add("VALIDATE_IMAGES", (WebElement) => {
  WebElement.should("be.visible")

});
Cypress.Commands.add("VALIDATE_IMAGE", (WebElement) => {
  WebElement.then(function (element) {
    expect(element).to.be.visible;
  });
});

Cypress.Commands.add(
  "VALIDATE_PEODUXCT_QUICK_VIEW_QUANTITY_DECREASE",
  (WebElement, element) => {
    WebElement.each(($btn, index) => {
      if (index == 0) {
        cy.wrap($btn).click().should("be.visible");

        // HomeOB.get_bestSellerProductCard_QuickView_QuantityCount()
        //   .invoke("val")
        //   .should("eq", "2");
        element.invoke("val").should("eq", "1");
      }
    });
  }
);

Cypress.Commands.add(
  "VALIDATE_PEODUXCT_QUICK_VIEW_QUANTITY_INCREASE",
  (WebElement, element) => {
    WebElement.each(($btn, index) => {
      if (index == 1) {
        cy.wrap($btn).click().should("be.visible");

        // HomeOB.get_bestSellerProductCard_QuickView_QuantityCount()
        //   .invoke("val")
        //   .should("eq", "2");
        element.invoke("val").should("eq", "2");
      }
    });
  }
);

Cypress.Commands.add("VALIDATE_PRODUCT_QUICK_VIEW_BTNS", (WebElement) => {
  WebElement.each(($btn, index) => {
    if (index == 0) {
      //hove element
      cy.wrap($btn).click({ force: true });
    }
  });
});
Cypress.Commands.add("VALIDATE_CART_WITH_QUANITY_BTN", (WebElement) => {
  WebElement.each(($btn, index) => {
    if (index == 3) {
      while (i <= 2) {
        cy.wrap($btn).click().should("not.be.disabled");
        i++;
      }
    }
  });
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
  WebElement.each(($btn, index) => {
    cy.wrap($btn).should("exist");
  });
});

Cypress.Commands.add("ADD_TO_WISHLIST", (webElement) => {
  webElement.click();
  // HomeOB.get_bestSellerProductCard_QuickView_AddToWishListBtn().click();
  // cy.contains("Close").should("be.visible").click();
});
Cypress.Commands.add("clickAction", (element) => {
  element.click();
});

Cypress.Commands.add("VALIDATE_CART_MSG", (WebElement) => {
  // Cypress.config('defaultCommandTimeout', 100000)
  cy.waitUntil(() => WebElement.contains("has been added to your cart"));
});
