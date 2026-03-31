// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './src/tests',

  forbidOnly: !!process.env.CI,

  retries: 0,

  fullyParallel: false,

  workers: 1,

  grep: /@dev/i,

  reporter: [
    ['line'],
    ['junit', { outputFile: 'test-results/pr-results.xml' }]
  ],

  use: {
    browserName: 'chromium',
    headless: true
  }

});