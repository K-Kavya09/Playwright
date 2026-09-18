import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('iughuihihj');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.locator('html').click();
  await page.locator('html').click();

  await page.getByRole('checkbox', { name: 'Toggle Todo' }).check();
  await page.getByText('Double-click to edit a todo Created by Remo H. Jansen Part of TodoMVC').click();
  await page.locator('.d-flex.flex-justify-between').first().click();
  await page.getByRole('link', { name: 'View remojansen\'s full-sized' }).click();
});