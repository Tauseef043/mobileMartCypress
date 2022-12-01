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
}
export default HomePageLeftNavOB;
