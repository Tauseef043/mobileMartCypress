class HomePageOB {
  get_bestSeller_ProductTitleTxt() {
    return cy.get(".module-header");
  }
  get_bestSellerProduct_PrevBtn() {
    return cy.get("button[class*='slick-prev']");
  }
  get_bestSellerProduct_NextBtn() {
    return cy.get("button[class*='slick-next']");
  }
  get_bestSellerProduct_titles()
  {
    return cy.get("div[class*=' product-type-2'] .content-wrapper h3 a")
  }
}
export default HomePageOB;
