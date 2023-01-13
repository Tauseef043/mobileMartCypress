/// <reference types="Cypress" />
import HomePageLeftNav from "../pageObjects/HomePageLeftNavOB.js";

import HomePageOB from "../pageObjects/HomePageOB.js";
import ProductPageOB from "../pageObjects/ProductPageOB.js";
describe("HomePage Test Suit", function () {
  const leftNav = new HomePageLeftNav();
  const HomeOB = new HomePageOB();
  const ProductOB = new ProductPageOB();
  var titleTxt,
    titleTxt2,
    i = 0;

  beforeEach(function () {
    cy.viewport(1600, 1200);

    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("Redirecting to url", function () {
    cy.visit(Cypress.env("URL"));

    cy.url().should("eq", "https://klbtheme.com/bacola/");
    cy.title().should(
      "eq",
      "Bacola – Grocery Market and Food Theme – KlbTheme"
    );
  });
  /*
  it("banner visiblity", () => {
    cy.get("#slick-slide00 > .slider-item > .overlay-link").should(
      "be.visible"
    );
  });

  it("left fruit Nav Visiblity", function () {
    leftNav.getLeft_fruitAndeg(this.data.fruitNav).then(function (element) {
      const navTitle = element.text();
      expect(navTitle.includes(this.data.fruitNav)).to.be.true;
    });

    //  leftNav.getLeft_fruitAndeg(this.data.fruitNav).should('have.text',' Fruits & Vegetables')
  });

  it("left fruit sub Nav cuts & sprout Visiblity", function () {
    // leftNav.getLeft_fruitAndeg(this.data.fruitNav).invoke('show')
    // cy.contains('Cuts & Sprouts').click({force: true} )
    // cy.url().should('include','cuts-sprouts')
    cy.hoverr(leftNav.getLeft_fruitAndeg(this.data.fruitNav), this.data.cutNav);

    cy.title().should("include", this.data.cutNav);
    cy.go("back");
  });

  it("left fruit sub Nav exoctic fruit Visiblity", function () {
    cy.hoverr(
      leftNav.getLeft_fruitAndeg(this.data.fruitNav),
      this.data.exoticFruitNav
    );
    cy.title().should("include", this.data.exoticFruitNav);
    cy.go("back");
  });
  it("left fruit sub Nav fresh fruit Visiblity", function () {
    cy.hoverr(
      leftNav.getLeft_fruitAndeg(this.data.fruitNav),
      this.data.freshFruitNav
    );
    cy.title().should("include", this.data.freshFruitNav);
    cy.go("back");
  });
  it("left fruit sub Nav fresh vagitables fruit Visiblity", function () {
    cy.hoverr(
      leftNav.getLeft_fruitAndeg(this.data.fruitNav),
      this.data.freshVegNav
    );
    cy.title().should("include", this.data.freshVegNav);
    cy.go("back");
  });
  it("left fruit sub Nav herbs  Visiblity", function () {
    cy.hoverr(
      leftNav.getLeft_fruitAndeg(this.data.fruitNav),
      this.data.herbsNav
    );
    cy.title().should("include", this.data.herbsNav);
    cy.go("back");
  });
  it("left fruit sub Nav packageproduce fruit Visiblity", function () {
    cy.hoverr(
      leftNav.getLeft_fruitAndeg(this.data.fruitNav),
      this.data.PackageNav
    );
    cy.go("back");
  });

  it("left fruit sub Nav party trays fruit Visiblity", function () {
    cy.hoverr(
      leftNav.getLeft_fruitAndeg(this.data.fruitNav),
      this.data.PartyNav
    );
    cy.go("back");
  });

  it("left meat Nav Visiblity", function () {
  
    leftNav.getLeft_fruitAndeg(this.data.meatNac).then(function (element) {
      const navTitle = element.text();
      expect(navTitle.includes(this.data.meatNac)).to.be.true;
    });
  });
  it("left meat Nav link verification", function () {
  
    leftNav.getLeft_fruitAndeg(this.data.meatNac).click()
    cy.log(this.data.meatsSeafoodPage)
    cy.title().should('eq',this.data.meatsSeafoodPage)
    cy.go('back')
  });
  
  it("left breakfast Nav Visiblity", function () {
    leftNav.getLeft_fruitAndeg(this.data.breakfast).then(function (element) {
      const navTitle = element.text();
      expect(navTitle.includes(this.data.breakfast)).to.be.true;
    });
  });
  it("left breakfast Nav link verification", function () {
  
    leftNav.getLeft_fruitAndeg(this.data.breakfast).click()
    cy.log(this.data.breakfast)
    cy.title().should('eq',this.data.breakfastDiaryPage)
    cy.go('back')
  });
*/

  // it("Left Nav Value of the Day", function () {
  //   leftNav.getLeft_ValueOfDay().then(function (element) {
  //     var title = element.text();

  //     expect(title).to.be.eq(this.data.valueOfDaynAV);
  //   }).click()

  //    cy.title().should('eq',this.data.productPage)
  //   cy.go('back')
  // })

  // it("Left Nav top 100 offers", function () {
  //   leftNav.get_Left_Top100().then(function (element) {
  //     var title = element.text();

  //     expect(title).to.be.eq(this.data.Top100Nav);
  //   }).click()

  //   cy.title().should('eq',this.data.productPage)
  //  cy.go('back')
  // });

  // it("Left Nav Value new arrivals", function () {
  //   leftNav.get_LeftNewArrival().then(function (element) {
  //     var title = element.text();

  //     expect(title).to.be.eq(this.data.NewArrival);
  //   }).click()

  //   cy.title().should('eq',this.data.productPage)
  //  cy.go('back')
  // });

  // it("Left Nav Banner1 Visibility", function () {
  //   leftNav.get_LeftNavBanner1().should("be.visible");
  // });
  // it("Left Nav Banner2 Visibility", function () {
  //   leftNav.get_LeftNavBanner2().should("be.visible");
  // });

  // it("verify left Nav sub2 Icons", function () {
  //   leftNav.get_LeftNavSub2Icons().each(($e1, index, $list) => {
  //     cy.get("div[class*='elementor-widget-container']  div[class='icon']")
  //       .eq(index)
  //       .next()
  //       .then(function (element) {
  //         expect(element).to.be.visible;
  //       });
  //   });
  // });

  // it("verify left Nav sub 2 texts", function () {
  //   leftNav.get_LeftNavSub2Text().each(($e1, index, $list) => {
  //     // cy.log($e1.text())
  //     if ($e1.text().trim().includes(this.data.AppDownTxt)) {
  //       expect($e1.text().trim()).to.be.eq(this.data.AppDownTxt);
  //     }
  //     if ($e1.text().trim().includes(this.data.orderNowTxt)) {
  //       expect($e1.text().trim()).to.be.eq(this.data.orderNowTxt);
  //     }
  //     if ($e1.text().trim().includes(this.data.orderariveTxt)) {
  //       expect($e1.text().trim()).to.be.eq(this.data.orderariveTxt);
  //     }
  //   });
  // });
  // it("Trending Text visibility", function () {
  //   cy.get("div[data-id='80d9e2d']")
  //     .contains(this.data.trendingProductTxt)
  //     .should("be.visible");
  // });

  // it("Trending Products Images visibility", function () {
  //   leftNav.get_LeftNav_TrendingProdict_Image().each(($e1, index, $list) => {
  //     leftNav
  //       .get_LeftNav_TrendingProdict_Image()
  //       .eq(index)
  //       .next()
  //       .then(function (img) {
  //         //eq is a funtion in cypress for indexing
  //         expect(img).to.be.visible;
  //       });
  //   });
  // });

  // it("Trending Products titles visibility", function () {
  //   leftNav.get_LeftNav_TrendingProdict_title().each(($e1, index, $list) => {
  //     cy.log($e1.text());
  //     expect($e1).to.be.visible;
  //   });
  // });
  // it("Trending Products Discount price visibility", function () {
  //   leftNav
  //     .get_LeftNav_TrendingProdict_DiscPrice()
  //     .each(($e1, index, $list) => {
  //       cy.log($e1.text());
  //       expect($e1).to.be.visible;
  //     });
  // });
  // it("Trending Products  price visibility", function () {
  //   leftNav.get_LeftNav_TrendingProdict_price().each(($e1, index, $list) => {
  //     cy.log($e1.text());
  //     expect($e1).to.be.visible;
  //   });
  // });
  // it("Trending Product link verification", function () {
  //   leftNav.get_LeftNav_TrendingProdict_title().each(($e1, index, $list) => {
  //     cy.log($e1.attr("href"));

  //     leftNav.get_LeftNav_TrendingProdict_title().eq(index).click();

  //     cy.title().should("include", $e1.text());

  //     cy.go("back");
  //   });
  // });
  // it("Customer widget entery title visibility", function () {
  //   leftNav.get_LeftNav_CustWidget_EnteryTitle().should("be.visible");
  // });
  // it("Customer widget entery message visibility", function () {
  //   leftNav.get_LeftNav_CustWidget_EnteryMsg().should("be.visible");
  // });
  // it("Customer widget customer name visibility", function () {
  //   leftNav.get_LeftNav_CustWidget_cusName().should("be.visible");
  // });
  // it("Customer widget customer designation visibility", function () {
  //   leftNav.get_LeftNav_CustWidget_cusDesignation().should("be.visible");
  // });
  // it("Left Nav Baverage Image visibility", function () {
  //   leftNav.get_LeftNav_Beverage_IMG().should("be.visible").cl;
  // });
  // it("Left Nav Baverage Link working", function () {
  //   leftNav.get_LeftNav_Beverage_IMG().click();

  //   cy.title().should("include", this.data.BeveragePageTitle);
  //   cy.go("back");
  // });

  it("Best Seller Product Title Verification", function () {
    cy.VALIDATE_TITLE(
      HomeOB.get_bestSeller_ProductTitleTxt(),
      this.data.bestSellerTxt
    );
  });

  it("Best Seller Product tagline text Verification", function () {
    cy.VALIDATE_TITLE(
      HomeOB.get_bestSeller_ProductTitleTxt(),
      this.data.bestSeller_TagLineTxt
    );
  });

  it("Verify best seller viewAll button", function () {
    HomeOB.get_bestSellerProductCard_ViewAllBtn().click();
    cy.VALIDATE_BUTTON_CLICK(Cypress.env("POPULAR_PRODUCT_PAGE"));

    cy.go("back");
  });

  // it("Verify Best seller Product Previous Button", function () {
  //   HomeOB.get_bestSellerProduct_titles().each(($e1, index, $list) => {
  //     titleTxt = $e1.text();
  //     // cy.log(titleTxt)
  //     HomeOB.get_bestSellerProduct_PrevBtn().should("be.enabled")

  //     if (index == 4) {
  //       return false;
  //     }
  //   });

  // });
  it("Verify add to wishList", function () {
    cy.VALIDATE_ADD_TO_WISHLISTS_BTN(
      HomeOB.get_bestSellerProduct_addTo_WishList()
    );
  });

  it("Verify View wihList Button", function () {
    cy.VALIDATE_VIEW__WISHLIST_BTN(
      HomeOB.get_bestSellerProduct_addTo_WishList(),
      this.data.wishListPage
    );
  });

  it("verify bestSeller badges",function(){
   

  })

  it("verify bestSeller Product Title",function(){
    cy.VALIDATE_TITLES( HomeOB.get_bestSellerProductCard_Titles())


  })
 it("Verify bestSeller product rating start",function(){
cy.VALIDATE_PRODUCT_RATINGS(HomeOB.get_bestSellerProduct_RatingStars())
  })

  it("Verify bestSeller product rating count",function(){
 
    cy.VALIDATE_TITLES( HomeOB.get_bestSellerProduct_RatingStarsCount())
    })
  // })
  // it("Verify bestSeller product rating count",function(){
  //   HomeOB.get_bestSellerProduct_RatingStarsCount().each(($btn,index)=>{
  //     cy.wrap($btn).then(function(element){

  //       expect(element.text()).to.be.exist
  //     })
  //   })
  // })
  // it("Verify bestSeller product Orignal price",function(){
  //   HomeOB.get_bestSellerProduct_OrignalPrice().each(($btn,index)=>{
  //     cy.wrap($btn).then(function(element){
  //       titleTxt=element.text()
  //       cy.log(titleTxt)
  //       expect(element.text()).to.be.exist
  //     })
  //   })
  // })
  // it("Verify bestSeller product Discounted price",function(){
  //   HomeOB.get_bestSellerProduct_DiscPrice().each(($btn,index)=>{
  //     cy.wrap($btn).then(function(element){
  //       titleTxt=element.text()
  //       cy.log(titleTxt)
  //       expect(element.text()).to.be.exist
  //     })
  //   })
  // })
  // it("Verify bestSeller product Images", function () {
  //   HomeOB.get_bestSellerProduct_PrevBtn().scrollIntoView();
  //   HomeOB.get_bestSellerProduct_Images().each(($btn, index) => {
  //     // expect($btn.text()).to.be.visible
  //     expect($btn).to.be.exist;
  //   });
  // });
  // it("Verify Add to cart Button", function () {
  //   HomeOB.get_bestSellerProductCard_AddToCartBtn().each(($btn, index) => {
  //     if (index == 3) {
  //       cy.wrap($btn)
  //         .click()
  //         .then(function () {
  //           //   // Cypress.config('defaultCommandTimeout', 100000)

  //           HomeOB.get_bestSellerProduct_addToCartSuccessMSG({
  //             timeout: 10000,
  //           }).should("be.visible");
  //           // .then(()=>{
  //           //  HomeOB.get_bestSellerProductCard_CartBoxCountTxt().then((text) => {
  //           //     expect(text.text()).equal("1");
  //           //   });
  //           // })
  //           //cart Box
  //         });
  //     }
  //   });
  // });
  // it("Best Seller Cart with Quantity PLus Button", function () {
  //   HomeOB.get_bestSellerProduct_CartWithQuantityPlusBtn().each(
  //     ($btn, index) => {
  //       if (index == 3) {
  //         while (i <= 2) {
  //           cy.wrap($btn).click().should("not.be.disabled");
  //           i++;
  //         }
  //       }
  //     }
  //   );
  // });
  // it("Best Seller Cart with Quantity Minus Button", function () {
  //   HomeOB.get_bestSellerProduct_CartWithQuantityMinusBtn().each(
  //     ($btn, index) => {
  //       if (index == 3) {
  //         while (i <= 2) {
  //           cy.wrap($btn).click().should("not.be.disabled");

  //           i++;
  //         }
  //       }
  //     }
  //   );
  // });
  // it("Best Seller Product qucik View Button", function () {
  //   HomeOB.get_bestSellerProductCard_quickViewBtn().each(($btn, index) => {
  //     if (index == 0) {
  //       //hove element
  //       cy.wrap($btn).click({ force: true });
  //     }
  //   });
  // });
  // it("Best Seller Product qucik View Image Visiblity", function () {
  //   HomeOB.get_bestSellerProductCard_QuickView_Image().should("be.visible");
  // });
  // it("Best Seller Product Quick View Title visibility", function () {
  //   HomeOB.get_bestSellerProductCard_QuickView_Title().should("be.visible");
  // });
  // it("Best Seller Product Quick Images visibility", function () {
  //   HomeOB.get_bestSellerProductCard_QuickView_Images({
  //     timeout: 10000,
  //   }).each(($btn, index) => {
  //     cy.log(index);
  //     try {
  //       cy.wrap($btn).click().should("be.visible");
  //     } catch (e) {
  //       cy.log(e);
  //     }
  //   });
  // });
  // it("Best Seller Product Quick View Price Verification", function () {
  //   HomeOB.get_bestSellerProductCard_QuickView_Oringal_OrignalPrice().should(
  //     "be.visible"
  //   );
  // });
  // it("Best Seller Product Quick View Disc Price Verification", function () {
  //   HomeOB.get_bestSellerProduct_DiscPrice().should("be.visible");
  // });
  // it("Best Seller Product Quick View Discription", function () {
  //   HomeOB.get_bestSellerProductCard_QUickViewDescription().should(
  //     "be.visible"
  //   );
  // });
  // it("Best Seller Product Quick View Quantity increase", function () {
  //   HomeOB.get_bestSellerProductCard_QuickView_QuantityIncreaseDecrease().each(
  //     ($btn, index) => {
  //       if (index == 1) {
  //         cy.wrap($btn).click().should("be.visible");

  //         HomeOB.get_bestSellerProductCard_QuickView_QuantityCount()
  //           .invoke("val")
  //           .should("eq", "2");
  //       }
  //     }
  //   );
  // });
  // it("Best Seller Product Quick View Quantity Decrease", function () {
  //   HomeOB.get_bestSellerProductCard_QuickView_QuantityIncreaseDecrease().each(
  //     ($btn, index) => {
  //       if (index == 0) {
  //         cy.wrap($btn).click().should("be.visible");

  //         HomeOB.get_bestSellerProductCard_QuickView_QuantityCount()
  //           .invoke("val")
  //           .should("eq", "1");
  //       }
  //     }
  //   );
  // });
  // it("Best Seller Product Quick View Add to cart Btn Verification", function () {
  //   HomeOB.get_bestSellerProductCard_QuickView_AddToCartBtn().click();
  //   cy.get(":nth-child(89) > .woocommerce-message").should("be.visible");
  // });
  // it("Best Seller Product Quick View Add to wishList button verification", function () {
  //   cy.addToWishListBtn();
  //   // HomeOB.get_bestSellerProductCard_AddToWishListBtn().click()
  // });
  // it("Validate Best Seller Product Quick View PopUp CLose button", function () {
  //   cy.clickAction(
  //     HomeOB.get_bestSellerProductCard_QuickView_CloseBtn().should("be.enabled")
  //   );
  // });
  it("Store QuoteBanner 1 verification", function () {
    cy.clickAction(
      HomeOB.get_bestSellerProductCardBelow_banner1().should("be.visible")
    ).then(function (element) {
      cy.title().should("eq", this.data.productPage);
      cy.url().should("eq", Cypress.env("URL") + Cypress.env("PRODUCT_PAGE"));
      cy.go("back");
    });
  });
  it("HOT PRODUCT FOR THIS WEEK Text Validations", function () {
    HomeOB.get_hotProductTxt()
      .should("be.visible")
      .then(function (element) {
        expect(element.text().toLowerCase()).equal(
          this.data.HotProductTxt.toLowerCase()
        );
      });
  });

  it("HOT PRODUCT FOR THIS WEEK Text Validations", function () {
    HomeOB.get_hotProductEnteryDecTxt()
      .should("be.visible")
      .then(function (element) {
        expect(element.text().toLowerCase()).equal(
          this.data.HotProductDescTXT.toLowerCase()
        );
      });
  });
  it("HOT PRODUCT FOR THIS WEEK DEscription Text Validations", function () {
    HomeOB.get_hotProductEnteryDecTxt()
      .should("be.visible")
      .then(function (element) {
        expect(element.text().toLowerCase()).equal(
          this.data.HotProductDescTXT.toLowerCase()
        );
      });
  });
  it("HOT PRODUCT FOR THIS WEEK View all button", function () {
    HomeOB.get_hotProductViewAllBtn().click();
    cy.log(cy.title());
    cy.url().should("include", Cypress.env("SALE_PRODUCT"));

    cy.title().should("eq", this.data.productPage);
    cy.go("back");
  });
  it("HOT PRODUCT FOR THIS WEEK IMG Visiblity", function () {
    HomeOB.get_hotProductBannerIMG().should("be.visible");
  });
  it("HOT PRODUCT FOR THIS WEEK Discount Label Visiblity", function () {
    HomeOB.get_hotProductBannerDiscTXT().should("be.visible");
  });
  it("HOT PRODUCT FOR THIS WEEK Product title visibility", function () {
    HomeOB.get_hotProductBannerTitleTXT()
      .should("be.visible")
      .then((element) => {
        HomeOB.get_hotProductBanner().click();
        ProductOB.get_productTitle().then((pTitle) => {
          expect(element.text().toLowerCase()).equal(
            pTitle.text().toLowerCase()
          );
        });
        cy.go("back");
      });
  });
});
