class HomePageOB {
  get_bestSellerProductCard_ViewAllBtn()
  {
    return cy.get(".site-module.module-carousel .button.button-info-default.xsmall.rounded")
  }
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
  get_bestSellerProductCard_QuickView_AddToWishListBtn()
  {
    return cy.get(".product-actions .tinvwl_add_to_wishlist-text")
  }
  get_bestSellerProductCard_QuickView_CloseBtn()
  {
    return cy.get("button[title='Close (Esc)']")
  }
  get_bestSellerProductCardBelow_banner1()
  {
    return cy.get(".site-module.module-banner.wide .banner-wrapper  .banner-thumbnail img")
  }
  get_hotProductTxt()
  {
    return cy.get(".site-module.module-hot-product .entry-title")
  }
  get_hotProductEnteryDecTxt()
  {
    return cy.get(".site-module.module-hot-product .entry-description")
  }
  get_hotProductViewAllBtn()
  {
    return cy.get(".site-module.module-hot-product .module-header div a")
  }
  get_hotProductBannerIMG(){
    return cy.get(".site-module.module-hot-product .module-body .thumbnail-wrapper img")
  }
  get_hotProductBannerDiscTXT(){
    return cy.get(".site-module.module-hot-product .module-body .hot-sale")
  }
  get_hotProductBannerTitleTXT(){
    return cy.get(".hot-product.products .product .content-wrapper .product-title")
  }
  get_hotProductBanner()
  {
    return cy.get('.product > .overlay-link')
  }
  get_bestSellerProduct_QuickViewCartSuccessMSG(){
    return cy.get(":nth-child(89) > .woocommerce-message")
  }
  get_newProduct_Txt()
  {
    return cy.get('.elementor-element-f9afb9a > .elementor-widget-container > .site-module > .module-header > :nth-child(1) > .entry-title')
  }
  get_newProduct_DescTxt()
  {
    return cy.get('.site-module.module-products .module-header .column .entry-description')
  }
  get_newProduct_ViewAllBtn()
  {
    return cy.get(".site-module.module-products .module-header .column a")
  }
}
export default HomePageOB;
