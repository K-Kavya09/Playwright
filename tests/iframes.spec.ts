import { test, expect } from '@playwright/test';

test.describe('Iframes', () => {
    test('verify element inside iframe', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/iframe');
// Locate the iframe
        const frame = page.frameLocator('#mce_0_ifr');

        const editor = frame.locator('#tinymce');

        await expect(editor).toBeVisible();
        await expect(editor).toContainText('Your content goes here.');
    });

    test('Enter text inside iframe', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/iframe');

        const frame = page.frameLocator('#mce_0_ifr');

        const editor = frame.locator('#tinymce');

        await editor.fill('Hello from inside the iframe');

        await expect(editor).toHaveText('Hello from inside the iframe');
    });
});