/*****************************************************************************
 * URLTests 
 * uses json files provide the environment data
 * steps consist of login
 * these will be expanded to include the login or a typical use case
 * e.g. resource booker>> booking a room, delete booking and logout
 * run from src
*****************************************************************************/

const { test, expect } = require('@playwright/test');
const fs = require('fs');

// Load and parse the JSON file
const testData = JSON.parse(fs.readFileSync('./src/tests/smoke/envData.json', 'utf-8'));

// Filter for active URLs
const activeUrls = testData.filter(urlData => urlData.status === 'active');

// Dynamically create tests for active URLs
activeUrls.forEach((urlData) => {
  test(`@dev Ping test for active URL: ${urlData.url}`, async ({ page }) => {
    const response = await page.goto(urlData.url);
    // Assert the response status is 200 (OK)
    expect(response.ok()).toBeTruthy();

    // Log test result to stdout; use console.log which is available in Playwright test runner
   // console.log(`Tested Active URL: ${urlData.url}, Status: ${response.status()}`);

  });
});