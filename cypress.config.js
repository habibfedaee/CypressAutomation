const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  env: {
    url: "https://rahulshettyacademy.com",
    userId: "hbf",
    password: "pass123",
  },
  retries: {
    runMode: 1,
    //openMode: 0,
  },
  projectId: "rxv5nv",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/**/*.js",
  },
});
