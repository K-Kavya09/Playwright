// Assignment 1 — Test Hooks & Annotations
// Scenario: Create a Playwright test suite for a practice web application.
// Requirements:
// Use beforeAll, beforeEach, afterEach, and afterAll hooks to perform suitable setup, navigation, and cleanup actions.
// Create at least 3 test cases that perform different validations on the application.
// Use test.skip() to skip one test that is not currently required.
// Use test.fixme() for one test that represents a known issue.
// Use test.slow() for a test that is expected to take longer than normal.
// Run the test suite and observe the hook execution order and the behavior of the annotated tests.
// import { test, expect, chromium, firefox, webkit} from '@playwright/test'

//     test('skip test on chrome', async ({ page, browserName }) => {
//     test.skip(browserName === 'chromium','Not supported in this chrome');
//             await page.goto('https://demo.playwright.dev/todomvc');
//             await expect(page.getByPlaceholder('What needs to be done?')).toBeVisible();
//         });
//     test('known broken test', async ({page}) => {test.fixme(true,'Feature is currently broken');
//             await page.goto('https://demo.playwright.dev/todomvc');
//             await expect(page).toHaveURL(/todomvc/);
//         });
//         test('slow test', async ({ page }) => {test.slow();
//         await page.goto('https://demo.playwright.dev/todomvc');
//         await page.getByPlaceholder('What needs to be done?').fill('Buy milk');
//         await page.getByPlaceholder('what needs to be done?').press('Enter');
//         await expect(page.locator('.todo-list li')).toHaveCount(1);
//         });
    
//     test.beforeAll(() => {console.log('yes,I am going to start now');
//     });
//     test.beforeEach(async ({ page }) => {
//         console.log('the page is getting loaded wait');
//         await page.goto('https://demo.playwright.dev/todomvc');
//     });
    
//     test(' Todo page', async ({ page }) => {
//         console.log('checking if locator appears');
//         await expect(
//         page.getByPlaceholder('What needs to be done?')
//         ).toBeVisible();
//     });
//     test('Test 2 - Add Todo', async ({ page }) => {
//         console.log('editing the info now ');
//         const todoInput = page.getByPlaceholder('What needs to be done?');
//         await todoInput.fill('Learn Playwright');
//         await todoInput.press('Enter');
//         await expect(
//         page.locator('.todo-list li')
//         ).toHaveCount(1);
//     });
//     test.afterEach(() => {
//         console.log('testing completed');
//     });
//     test.afterAll(() => {
//         console.log('finally everything done');
//     });

// Assignment 2 — Handling Multiple Tabs/Windows
// Scenario: Test a website where clicking a link or button opens another page in a new tab/window.
// Requirements:
// Navigate to a suitable practice website and identify an element that opens a new tab/window. url: https://webdriveruniversity.com/
// Use context.waitForEvent('page') to wait for the newly opened tab.
// Store the newly opened tab in a separate Page variable.
// Verify the URL or title of both the original tab and the newly opened tab.
// Perform an action or assertion on the new tab and then perform an assertion on the original tab.
// Explain the difference between page, context, and the newly created Page object when handling multiple tabs.

import { test, expect, Page } from '@playwright/test';
test('Handle multiple tabs', async ({ page, context }) => {
    await page.goto('https://playwrightlab.github.io');

    const newTabPromise = context.waitForEvent('page');
    await page.locator('#newTabBtn').click();
    const secondTab = await newTabPromise;

    await secondTab.waitForLoadState();

    const tabs = context.pages();

    expect(tabs.length).toBe(2);

    const firstTab = page;

    await expect(
        firstTab.getByRole('heading',{name:'Form Elements'}))
    await expect(
        firstTab.getByTitle('PlayLab — Playwright Practice Arena'));
    await expect(
        secondTab.getByTitle('PlayLab — Login'));
});

