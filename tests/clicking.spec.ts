import { test, expect } from '@playwright/test';
//single click
test('single click',async ({ page }) => {
  // Open OrangeHRM
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  // Login
  await page.locator('input[placeholder="Username"]').fill('Admin');
  await page.locator('input[placeholder="Password"]').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  // Verify Login
  await expect(page).toHaveURL(/dashboard/);
});
 
//double click
test('double click',async({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc');
    await page.getByPlaceholder('what needs to be done?').fill('buy milk');
    await page.getByPlaceholder('what needs to be done?').press('Enter');
    await page.getByText('buy milk').dblclick();
    await expect(page.locator('.edit')).toBeVisible();
})
 
//hover
test('hover',async({page})=>{
  await page.goto('https://the-internet.herokuapp.com/hovers');
  const user=page.locator('.figure').first();
  await user.hover();
  await expect(user.getByRole('link',{name:'view profile'})).toBeVisible();
});
 
// check and uncheck
test('check',async({page})=>{
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  const checkbox1 = page.locator('#checkboxes input').nth(0);
  const checkbox2 = page.locator('#checkboxes input').nth(1);
  await checkbox1.check();
  await expect(checkbox1).toBeChecked();
  await checkbox2.uncheck();
  await expect(checkbox2).not.toBeChecked();
 
})