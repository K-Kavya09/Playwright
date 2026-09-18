// import { test, expect } from '@playwright/test';

// test.describe('SauceDemo - Test Hooks', () => {

//     test.beforeAll(() => {
//         console.log('Before all tests - test suite started');
//     });

//     test.beforeEach(async({page}) => {

//         await page.goto('https://www.saucedemo.com');

//         await page.locator('#user -name').fill('standard_user');
//         await page.locator('#password').fill('secret_sauce');
//         await page.locator('#login-button').click();

//         await expect(page).toHaveURL(/inventory.html/);
//     });

//     test('Add product to cart', async ({page}) => {
//         await page
//             .locator('[data-tests = "add-to-cart-sauce-labs-backpack"]')
//             .click();

//             await expect(
//             page.locator('.shopping_cart_badge')
//         ).toHaveText('1');
//     });

//     test('Open product details', async ({ page }) => {
//         await page
//             .getByText('Sauce Labs Backpack')
//             .click();
//         await expect(
//             page.getByText('Sauce Labs Backpack')
//         ).toBeVisible();
//     });
//     test.afterEach(async ({ page }) => {
//         console.log('Test completed');

//         await page
//             .locator('#react-burger-menu-btn')
//             .click();
//         await page
//             .getByText('Logout')
//             .click();
//     });

//     test.afterAll(() => {
//         console.log('All tests comapleted');
//     });
// });
import { test, expect } from '@playwright/test';
 
test.describe('Test Hooks', () => {
 
  // Runs once before all tests
  test.beforeAll(() => {
    console.log('1. Before All');
  });
 
 
  // Runs before EACH test
  test.beforeEach(async ({ page }) => {
    console.log('2. Before Each');
 
    await page.goto('https://demo.playwright.dev/todomvc');
  });
 
 
  test('Test 1 - Check Todo page', async ({ page }) => {
 
    console.log('3. Test 1');
 
    await expect(
      page.getByPlaceholder('What needs to be done?')
    ).toBeVisible();
  });
 
 
  test('Test 2 - Add Todo', async ({ page }) => {
 
    console.log('3. Test 2');
 
    const todoInput = page.getByPlaceholder('What needs to be done?');
 
    await todoInput.fill('Learn Playwright');
    await todoInput.press('Enter');
 
    await expect(
      page.locator('.todo-list li')
    ).toHaveCount(1);
  });
 
 
  // Runs after EACH test
  test.afterEach(() => {
    console.log('4. After Each');
  });
 
 
  // Runs once after all tests
  test.afterAll(() => {
    console.log('5. After All');
  });
 
});