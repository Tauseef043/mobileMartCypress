class ProductPageOB{

    get_productTitle()
    {
        return cy.get(".product-header .product_title.entry-title")
    }
}
export default ProductPageOB;