import { test } from '@playwright/test';
import { expect } from './custom-matchers';

test('Custom Matcher and Visual Regression', async ({ page }) => {

  await page.goto('https://demowebshop.tricentis.com/');

  // Product section
  const products = page.locator('.product-grid .item-box');

  // Verify product count using custom matcher
  await expect(products).toHaveProductCount(6);

  // Visual Regression
  await expect(page).toHaveScreenshot('homepage.png', {
    fullPage: true,
  });
});