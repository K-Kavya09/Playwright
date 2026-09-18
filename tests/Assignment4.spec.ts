import { test, expect } from '@playwright/test';
test('Search user in Admin page', async ({ page }) => {
// Login
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.locator('input[placeholder="Username"]').fill('Admin');
await page.locator('input[placeholder="Password"]').fill('admin123');
await page.getByRole('button', { name: 'Login' }).click();
await expect(page).toHaveURL(/dashboard/);   // this is verifying the dashboard
await page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1)').click();
expect(page.getByRole('heading', {name:"User Management"}))
const user_role =  page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(2) > div > div:nth-child(2) > div > div')
await user_role.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div.oxd-select-text-input').click()
await page.getByRole('button',{name:'Search'}).click();
expect(page.getByText('(3) Records Found')).toBeVisible();
});