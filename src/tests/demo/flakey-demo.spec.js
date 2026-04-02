//const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';
test.describe.configure({ retries: 2 });

test('@flaky Scenario: 1-intentionally flaky test (PoC)', async () => {
  if (Math.random() < 0.5) {
    throw new Error('Random flake for PoC');
  }
});


test('@flaky Scenario: 2-tight timeout flake (PoC)', async ({ page }) => {
  await page.goto('https://keatsuat.kcl.ac.uk/', { timeout: 500 });
});


test('@flaky Scenario: 3-retry-based flake (PoC)', async () => {
  expect(Math.random()).toBeGreaterThan(0.7);
});

test('@flaky Scenario: 4-intentionally slow test (PoC)', async () => {
  await new Promise(r => global.setTimeout(r, 2000));
});
