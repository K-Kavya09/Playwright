import { test, expect } from '@playwright/test';
test('Handle multiple tabs', async ({ page, context }) => {
    await page.goto('https://the-internet.herokuapp.com/windows');

    const newTabPromise = context.waitForEvent('page');
    await page.getByRole('link', { name: 'Click Here' }).click();
    const secondTab = await newTabPromise;

    await secondTab.waitForLoadState();

    const tabs = context.pages();

    expect(tabs.length).toBe(2);

    const firstTab = page;

    await expect(firstTab.locator('h3'))
        .toHaveText('Opening a new window');

    await expect(secondTab.locator('h3'))
        .toHaveText('New Window');
});