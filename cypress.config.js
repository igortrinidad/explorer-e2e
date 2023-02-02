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
    RECORD_KEY: '125c5757-2501-4dac-915b-2818738ad08d',
    APP_BASE_URL: 'https://explorer.localenergycodes.com',
  }
});
