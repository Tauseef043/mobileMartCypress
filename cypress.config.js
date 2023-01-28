const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {




 
    defaultCommandTimeout: 6000,
    pageLoadTimeout: 60000,
    reporter: 'mochawesome',


    //declaring custom global enviroment variable
    "env":
    {
      URL:"https://klbtheme.com/bacola",
      PRODUCT_PAGE:"/shop/?filter_cat=58",
      SALE_PRODUCT:"/shop/?on_sale=onsale",
      POPULAR_PRODUCT_PAGE:"/shop/?orderby=popularity",
      SHOP:"/shop"

    },
  

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
