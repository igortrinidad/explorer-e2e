const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "i8mdva",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
    },
  },

  env: {
    BRANCH: 'DDEV-477'
  }
});
