class HomePageLeftNavOB {
  getBanner() {
    return cy.get("#slick-slide00 > .slider-item > .overlay-link");
  }
  getCollapseSideBarBtn() {
    return cy.get('.container > .all-categories > [href="#"]');
  }
  getLeft_fruitAndeg(elemnt) {
    return cy.get("#menu-sidebar-menu-1").contains(elemnt);
  }
  getLeft_Meat_SeavFood() {
    return cy.get("#menu-sidebar-menu-1").contains(" Meats & Seafood");
  }
  getLeft_ValueOfDay() {
    return cy.get("#menu-sidebar-menu-1 > :nth-child(9) > a");
  }
  get_Left_Top100() {
    return cy.get("#menu-sidebar-menu-1 > :nth-child(10) > a");
  }
  get_LeftNewArrival() {
    return cy.get("#menu-sidebar-menu-1 > :nth-child(11) > a");
  }
  get_LeftNavBanner1() {
    return cy.get("div[data-id='8dc5612'] div[class='module-body']");
  }

  get_LeftNavBanner2() {
    return cy.get("div[data-id='1494925'] div[class='module-body']");
  }
  get_LeftNavSub2Icons() {
    return cy.get(
      "div[class*='elementor-widget-container']  div[class='icon']"
    );
  }
  get_LeftNavSub2Text() {
    return cy.get(
      "div[class*='elementor-widget-container']  div[class='text']"
    );
  }

  get_LeftNav_TrendingProdict_Image() {
    return cy.get("div[data-id='80d9e2d']  div.thumbnail-wrapper");
  }

  get_LeftNav_TrendingProdict_title() {
    return cy.get("div[data-id='80d9e2d']  h3.product-title a");
  }
  get_LeftNav_TrendingProdict_DiscPrice() {
    return cy.get("div[data-id='80d9e2d'] div.content-wrapper  span.price ins span bdi");
  }

  get_LeftNav_TrendingProdict_price() {
    return cy.get("div[data-id='80d9e2d'] div.content-wrapper  span.price del span bdi");
  }
  get_LeftNav_CustWidget_title(){
    return cy.get("div[data-id='23c1373']  h4.widget-title")
  }
  get_LeftNav_CustWidget_EnteryTitle(){
    return cy.get("div[data-id='23c1373']  h4.entry-title")
  }
  get_LeftNav_CustWidget_EnteryMsg(){
    return cy.get("div[data-id='23c1373']  h4.entry-message")
  }
  get_LeftNav_CustWidget_Img(){
    return cy.get("div[data-id='23c1373']  div.avatar")
  }
  get_LeftNav_CustWidget_cusName(){
    return cy.get("div[data-id='23c1373']  h3.customer-name")
  }
  get_LeftNav_CustWidget_cusDesignation(){
    return cy.get("div[data-id='23c1373']  span.customer-mission")
  }
}
export default HomePageLeftNavOB;
