// @ts-check
import { defineConfig, devices } from '@playwright/test';
import path from 'path';

export default defineConfig({

  testDir: './src/tests',

  forbidOnly: !!process.env.CI,

  retries: 1,

  workers: 2,

  reporter: [
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: 'test-results/results.xml' }],
    ['playwright-smart-reporter', {
      outputFile: 'playwright-report/smart-report.html',
      historyFile: 'test-history.json',
      maxHistoryRuns: 10,
      enableComparison: true,
      enableRetryAnalysis: true,
      enableStabilityScore: true
    }]
  ],

  use: {
    viewport: { width: 1280, height: 800 },
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: true
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]

});
