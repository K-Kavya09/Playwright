import { test, expect } from '@playwright/test';

test.describe('Test Annotation', () => {

    // 1. skip a test
    test('skip test on webkit', async ({ page, browserName }) => {

        test.skip(
            browserName === 'webkit',
            'Not supported in webkit'
        );
        await page.goto('https://demo.playwright.dev/todomvc');
        await expect(
            page.getByPlaceholder('what needs to be done?')
        ).toBeVisible();
    });
    test('known broken test', async ({page}) => {
        test.fixme(
            false,
            'Feature is currently broken'
        );
        await page.goto('https://demo.playwright.dev/todomvc');
        await expect(page).toHaveURL(/todomvc/);
    });
    // 
    test('slow test', async ({ page }) => {
        test.slow();
        await page.goto('https://demo.playwright.dev/todomvc');
        await page.getByPlaceholder('What needs to be done?')
            .fill('Buy milk');
        await page.getByPlaceholder('what needs to be done?')
            .press('Enter');
        await expect(page.locator('.todo-list li'))
            .toHaveCount(1);
    });
    // //run only this test
    // test.only('run only this test',async({page})=>{
    //     await page.goto('/todomvc');
    // });
});