import { test, expect } from '@playwright/test';

test('Find and click a button inside shadow DOM', async ({ page }) => {

    //open the page
    await page.goto('https://practice.expandtesting.com/shadowdom');

    // Find the shadow DOM host
    const shadowHost = page.locator('#shadow-host');

    // Find the button inside shadow DOM
    const button = shadowHost.locator('#my-btn');

    // verify the button
    await expect(button).toHaveText(
        'This button is inside a Shadow DOM.'
    );
    // click the button
    await button.click();
});
test('Find the correct element by scoping to Shadow DOM', async ({ page }) => {

    // Open the page
    await page.goto('https://practice.expandtesting.com/shadowdom');

    //there are two elements with the same Id

    await expect(page.locator('#my-btn')
    ).toHaveCount(2);

    // search only inside the shadow DOM
    const shadowButton = page
        .locator('#shadow-host')
        .locator('#my-btn');
    
    // Now only one button is found
    await expect(shadowButton).toHaveCount(1);
});
