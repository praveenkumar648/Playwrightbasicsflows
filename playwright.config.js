// @ts-check

const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

// Test folder
testDir: './tests',

// Parallel execution
fullyParallel: true,

// Fail the build if test.only is left accidentally
forbidOnly: !!process.env.CI,

// Retry on CI only
retries: process.env.CI ? 2 : 0,

// Number of workers
workers: process.env.CI ? 1 : undefined,



// Reporter configuration
reporter: [
['allure-playwright']
],

// Shared settings for all projects
use: {

// Base URL
baseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',

// Browser settings
headless: false,
launchOptions: {
    slowMo: 1000
  },


// Screenshot settings
screenshot: 'only-on-failure',

// Video recording
video: 'retain-on-failure',

// Trace for debugging
trace: 'on-first-retry',

// Browser viewport
viewport: { width: 1440, height: 900 },

// Ignore HTTPS errors
ignoreHTTPSErrors: true,

// Action timeout
actionTimeout: 60000,

// Navigation timeout
navigationTimeout: 60000,
},

// Browser projects
projects: [

{
  name: 'Chromium',
  use: {
...devices['Desktop Chrome'],
},
},
// {
// name: 'Firefox',
//use: {
// ...devices['Desktop Firefox'],
//},//},

//{
/* name: 'Webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },*/

],

// Folder for test artifacts
outputDir: 'test-results/',


});