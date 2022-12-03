/// <reference types="Cypress" />
import HomePageLeftNav from "../pageObjects/HomePageLeftNavOB.js";

describe("HomePage Test Suit", function () {
  const leftNav = new HomePageLeftNav();

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
  it("Customer widget title visibility",function(){

    leftNav.get_LeftNav_CustWidget_title().should('include.text',this.data.cusWidgetTitle)
  })
});
