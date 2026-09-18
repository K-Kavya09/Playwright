import { test, expect } from '@playwright/test';

// Hard Assertion
test('wait for text to appear', async ({ page }) => {
  await page.goto('https://playwrightlab.github.io/');

  // Hard assertion
  await expect(page).toHaveTitle(/Playwright/i);

  // This runs only if the above assertion passes
  await expect(page).toHaveURL('https://playwrightlab.github.io/');
});

// Soft Assertion
test('Soft assertion', async ({ page }) => {
  await page.goto('https://playwrightlab.github.io/');

  // Test continues even if these fail
  await expect.soft(page).toHaveTitle(/Playwright/i);

  await expect.soft(page).toHaveURL(
    'https://playwrightlab.github.io/'
  );

  await expect.soft(
    page.getByRole('heading').first()
  ).toBeVisible();
});

// Hard + Soft Assertions Together
test('Hard and soft assertions together', async ({ page }) => {
  await page.goto('https://playwrightlab.github.io/');

  // Soft assertions
  await expect.soft(page).toHaveTitle(/Playwright/i);

  await expect.soft(
    page.getByRole('heading').first()
  ).toBeVisible();

  // Hard assertion
  await expect(page).toHaveURL(
    'https://playwrightlab.github.io/'
  );

  // Executes only if the hard assertion passes
  await expect(
    page.getByRole('heading').first()
  ).toBeVisible();
});