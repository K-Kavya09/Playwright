import {test, expect, chromium, firefox, webkit} from '@playwright/test'
test('Using context fixture', async () => {
    const browser = await chromium.launch();

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await expect(page).toHaveTitle(/OrangeHRM/);
    await browser.close();
});

test('Using page and context together', async ({ page, context}) => {
    await page.goto('/todomvc/');

    const secondPage = await context.newPage();
    await secondPage.goto('/todomvc');

    expect (context.pages().length).toBe(2);
});

test.describe('02 - Built- in fixtures', () => {
    test('page and context fixtures are ready to use immediately', async ({page, context }) => {
        expect(context).toBeTruthy();
        await page.goto('https://demo.playwright.dev/todomvc');
        await expect(page).toHaveURL(/todomvc/);
});
});

test('browser fixtures gives access to the underlying Browser object', async ({ browser}) => {
    const secondContext = await browser.newContext();
    const secondPage = await secondContext.newPage();
    await secondPage.goto('https://demo.playwright.dev/todomvc');
    await expect(secondPage.getByPlaceholder('what needs to be done?')).toBeVisible();
    await secondContext.close();
});


test.describe('02-Built-in fixtures', () => {
 
    test('Page and context fixtures are ready to use immediately', async ({ page, context }) => {
 
        expect(context).toBeTruthy();
 
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 
        await expect(page).toHaveURL(/login/);
 
    });
 
});
