const { test, expect } = require('@playwright/test');
test.describe.configure({ retries: 2 });

test('1-intentionally flaky test (PoC)', async () => {
  if (Math.random() < 0.5) {
    throw new Error('Random flake for PoC');
  }
});


test('2-tight timeout flake (PoC)', async ({ page }) => {
  await page.goto('https://keatsuat.kcl.ac.uk/', { timeout: 500 });
});


test('3-retry-based flake (PoC)', async () => {
  expect(Math.random()).toBeGreaterThan(0.7);
});

test('4-intentionally slow test (PoC)', async () => {
  await new Promise(r => global.setTimeout(r, 2000));
});
