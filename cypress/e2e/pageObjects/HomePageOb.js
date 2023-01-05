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
  get_bestSellerProduct_titles() {
    return cy.get("div[class*=' product-type-2'] .content-wrapper h3 a");
  }
  get_bestSellerProduct_addTo_WishList() {
    return cy.get(
      ".product-type-2 .product-buttons a[class*='tinvwl_add_to_wishlist_button']"
    );
  }
  get_bestSellerProduct_closeFavPopUP() {
    return cy.get("button[class*='tinvwl_button_close']");
  }
  get_bestSellerProduct_ViewFavPopUP() {
    return cy.get("button[class*='tinvwl_button_view tinvwl-btn-onclick']");
  }
  get_bestSellerProduct_Badges() {
    return cy.get(".product-type-2 .product-badges");
  }
  get_bestSellerProductCard_Titles() {
    return cy.get(".product-type-2 .product-title");
  }
  get_bestSellerProduct_StockTxts() {
    return cy.get(".product-type-2 .product-meta");
  }
  get_bestSellerProduct_RatingStars() {
    return cy.get(
      ".product-type-2 .content-wrapper .product-rating .star-rating"
    );
  }
  get_bestSellerProduct_RatingStarsCount() {
    return cy.get(
      ".product-type-2 .content-wrapper .product-rating .count-rating"
    );
  }
  get_bestSellerProductCard_AddToCartBtn() {
    return cy.get(
      ".product-type-2 .content-wrapper div[class*='cart-with-quantity']"
    );
  }
  get_bestSellerProduct_OrignalPrice() {
    return cy.get(
      ".product-type-2 .content-wrapper .price del span[class*='woocommerce-Price-amount amount']"
    );
  }
  get_bestSellerProduct_DiscPrice() {
    return cy.get(
      ".product-type-2 .content-wrapper .price ins span[class*='woocommerce-Price-amount amount']"
    );
  }
  get_bestSellerProduct_Images() {
    return cy.get(
      "div[class*='product-wrapper product-type-2'] .thumbnail-wrapper a img"
    );
  }
  get_bestSellerProduct_CartWithQuantityPlusBtn() {
    return cy.get(
      "div[class*=' product-type-2'] .content-wrapper div[class*='cart-with-quantity'] div[class*='plus']"
    );
  }
  get_bestSellerProduct_CartWithQuantityMinusBtn() {
    return cy.get(
      "div[class*=' product-type-2'] .content-wrapper div[class*='cart-with-quantity'] div[class*='minus']"
    );
  }
  get_bestSellerProduct_CartWithQuantityTxt() {
    return cy.get(
      "div[class*=' product-type-2'] .content-wrapper div[class*='cart-with-quantity'] input[class*='qty text']"
    );
  }
  get_bestSellerProduct_addToCartSuccessMSG() {
    return cy.get(".woocommerce-message");
    
  }
  get_bestSellerProductCard_CartBoxCountTxt() {
    return cy.get("div[class*='header-cart'] span[class='cart-count-icon']");
  }
  get_bestSellerProductCard_quickViewBtn()
  {
    return cy.get("div[class*='product-wrapper product-type-2'] .thumbnail-wrapper .product-buttons a[class*='quick-view-button']")
  }
  get_bestSellerProductCard_QuickView_Image()
  {
    return cy.get('#images > .slick-list > .slick-track > .slick-current > img')
  }
  get_bestSellerProductCard_QuickView_Title()
  {
    return cy.get('.product_title')
  }
  get_bestSellerProductCard_QuickView_Oringal_OrignalPrice()
  {
    return cy.get('.product-detail > .price > del > .woocommerce-Price-amount')
  }
  get_bestSellerProductCard_QuickView_DicImage()
  {
    return cy.get('.product-detail > .price > ins > .woocommerce-Price-amount')
  }
  get_bestSellerProductCard_QuickView_AddToCartBtn()
  {
    return cy.get('.single_add_to_cart_button')
  }
  get_bestSellerProductCard_QuickView_Images()
  {
    return cy.get("div[id='thumbnails'] div[class*='product-thumbnail'] img")
  }
  get_bestSellerProductCard_QUickViewDescription(){
    return cy.get('.product-short-description > p')
  }
  get_bestSellerProductCard_QuickView_QuantityIncreaseDecrease(){
    return cy.get("form[class='cart single-ajax'] .quantity div")
  }
  get_bestSellerProductCard_QuickView_QuantityCount()
  {
    return cy.get("form[class='cart single-ajax'] .quantity input")
  }
}
export default HomePageOB;
