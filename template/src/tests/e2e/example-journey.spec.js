const { test, expect } = require('@playwright/test');
//import { test, expect } from '@playwright/test';
const fs = require('fs');

/**
 * Scenario: Validate systemTest project structure after running setup script
 */
test('@dev @test Scenario: Bootstrap systemTest playwright project', async () => {

  const baseFiles = [
    './playwright.config.js',
    './package.json'
  ];

  const mainFolders = [
    './.ado/pipelines',
    './src',
    './src/docs',
    './src/helpers',  
    './src/pages',
    './src/pipelines',
    './src/tests',
    './src/utils'
  ];

  
  const subFolders = [
    /*'./src/performance/jmeter',
    './src/performance/jmeter/scripts',
    './src/performance/jmeter/data',
    './src/performance/jmeter/configs',
    './src/performance/jmeter/configs/profiles',
    './src/performance/jmeter/configs/dlt',
    './src/performance/jmeter/results',
    './src/pipelines/ci',
    './src/pipelines/scripts',
    './src/tests/e2e',
    './src/tests/e2e/test-data',
    './src/tests/feature',*/
    './src/tests/smoke',
    './src/tests/e2e'
  ];


  await test.step('Given I run the setup-project-v1.sh script', async () => {
    expect(fs.existsSync('./src')).toBe(true);
  });

  await test.step('Then I should see the base files present', async () => {
    baseFiles.forEach(file => {
      const exists = fs.existsSync(file);
      expect(exists, `Missing file: ${file}`).toBe(true);
    });
  });

  await test.step('Then I should see the main project folders created', async () => {
    mainFolders.forEach(folder => {
      const exists = fs.existsSync(folder);
      expect(exists, `Missing folder: ${folder}`).toBe(true);
    });
  });
