import { test, expect } from '@playwright/test';

// test('Practice Playwright built-in locators', async({ page }) => {
//     // open application

//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//     const username = page.getByPlaceholder('Username');
//     await expect(username).toBeVisible();
//     await username.fill('Admin');

    
//     const Password = page.getByPlaceholder('Password');
//     await expect(Password).toBeVisible();
//     await Password.fill('admin123');


// });
test.beforeEach(async ({ page }) => {
    // open orangeHRM
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // login

    await page.locator('input[placeholder="Username"]').fill('Admin');
    await page.locator('input[placeholder="Password"]').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify login
    await expect(page).toHaveURL(/dashboard/);
});
test('Find an element using its text', async ({ page }) => {

    // find the dashboard menu
    const dashboard = page.getByRole('heading', { exact: true});
    // verify Dashboard is visible
    await expect(dashboard).toBeVisible();
});
test('Find a menu item using an element inside it',async ({ page }) => {

    // Find the menu item containing the text "PIM"

    const menuItem = page
        .locator('.oxd-main-menu-item')
        .filter({hasText: 'PIM'});

    await expect(menuItem).toHaveCount(1);

    // click pim

    await menuItem.click();

    await expect(page).toHaveURL(/pim/);
});
//
test('Find an element inside the main menu', async ({ page }) => {
  // Find the main menu
  const menu = page.locator('.oxd-sidepanel');
  // Find PIM only inside the menu
  const pimMenu = menu.getByText('PIM', { exact: true }); //getByText() finds an element by its text content.
  // Verify PIM is visible
  await expect(pimMenu).toBeVisible();
  // Click PIM
  await pimMenu.click();
  // Verify PIM page is opened
  await expect(page).toHaveURL(/pim/);
});
test('Find employee section and open it', async ({ page }) => {
  // Find PIM menu
  const pim = page
    .locator('.oxd-main-menu-item')
    .filter({ hasText: 'PIM' });
  // Verify PIM menu is available
  await expect(pim).toHaveCount(1);
  // Click PIM
  await pim.click();
  // Verify Employee Information section
  await expect(
    page.getByText('Employee Information', { exact: true })
  ).toBeVisible();
});
 