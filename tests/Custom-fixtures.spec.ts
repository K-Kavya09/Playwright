import { test as base, expect, Page} from '@playwright/test';

type MyFixtures = {
    loggedInPage: Page;
};

const test = base.extend<MyFixtures>({
    loggedInPage: async ({ page }, use) => {
        await page.goto('https://the-internet.herokuapp.com/login');
        await page.getByLabel('username').fill('tomsmith');
        await page.getByLabel('Password').fill('SuperSecretPassword!');
        await page.getByRole('button', {name: 'Login'}).click();

        await expect(page.locator('.flash.success')).toBeVisible();

        await use(page);

        await page.getByRole('link', {name: 'Logout'}).click();
    }
});

test.describe('Custom Fixture Example', () => {
    test('user is already loggedin', async ({ loggedInPage}) => {
        await expect(
            loggedInPage.locator('h2')
        ).toHaveText('Secure Area');
    });
    test('user can access the secure page', async ({ loggedInPage }) =>{
        await expect(loggedInPage).toHaveURL(/secure/);
    });
});