class HomePageLeftNavOB{

 getBanner(){

  return  cy.get('#slick-slide00 > .slider-item > .overlay-link')
 }
 getCollapseSideBarBtn(){
   return cy.get('.container > .all-categories > [href="#"]')
 }
 getLeft_fruitAndeg(elemnt)
 {
  return cy.get('#menu-sidebar-menu-1').contains(elemnt)
 }
 getLeft_Meat_SeavFood(){
   return cy.get('#menu-sidebar-menu-1').contains(' Meats & Seafood')
 }

}
export default HomePageLeftNavOB;