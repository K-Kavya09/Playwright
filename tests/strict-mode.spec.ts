import { test, expect } from '@playwright/test';
 
test.beforeEach(async ({ page }) => {
  // Open OrangeHRM
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  // Login
  await page.locator('input[placeholder="Username"]').fill('Admin');
  await page.locator('input[placeholder="Password"]').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  // Verify Login
  await expect(page).toHaveURL(/dashboard/);
});
test ('fix using first term of a attribute',async({page})=>{
    const menuItems = page.getByRole('link');
    const firstlink = menuItems.first();
    await expect(firstlink).toBeVisible();
});
 
test ('fix - use nth() when we want the matching position',async({page})=>{
    const menuItems = page.getByRole('link');
    const secondLink = menuItems.nth(1);
    await expect(secondLink).toBeVisible();
});
test ('check how many elements are found',async({page})=>{
    const menuItems = page.locator('.oxd-main-menu-item');
    const count =await menuItems.count();
    console.log('menu items:',count);
    await expect(menuItems.first()).toBeVisible();
});
 

// `.first()`=> Selects the **first element** from multiple matching elements. Use when the first matching element is the required one.
// `.last()`=> Selects the **last element** from multiple matching elements. Use when the last matching element is the required one.
// `.nth(index)`=> Selects an element using its **position**; index starts from `0`. Example: `.nth(1)` selects the second element.
// `.filter()`=> Narrows down multiple elements using **text or another locator**. Useful when you want a specific element based on its content.
// `.and()`=> Combines two locators and returns elements that match **both conditions**. Useful for making a locator more specific.
// `.locator()`=> Searches for an element **inside another element**. Useful for narrowing the search to a specific parent/container.
// `.getByRole()`=> Locates elements using their **accessible role and name**. Often produces more specific and readable locators.
// `.getByText()`=> Locates an element using its **visible text**. Add `{ exact: true }` when you need an exact text match.
// `.getByTestId()` => Locates an element using a **test ID** such as `data-testid`. Very useful when developers provide stable test attributes.
// `.count()`=> Returns the **number of matching elements**. Useful for checking how many elements your locator actually finds.