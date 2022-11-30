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

    },
  

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
